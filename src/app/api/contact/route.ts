import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Zod Schema for server-side validation
const ContactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address"),
  serviceInterest: z.enum(["problem", "build", "understand", "general"]).default("general"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(3000),
  // Honeypot field: bots usually fill this out
  hp_company: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

// In-memory rate limiter: maximum 5 submissions per 10 minutes per IP
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP identification for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (process.env.NODE_ENV !== "test" && ip !== "127.0.0.1" && isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many inquiries. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    const body = await req.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      const firstError =
        result.error.issues?.[0]?.message ||
        ("errors" in result.error && Array.isArray((result.error as unknown as { errors: { message: string }[] }).errors)
          ? (result.error as unknown as { errors: { message: string }[] }).errors[0]?.message
          : "Invalid input");
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, serviceInterest, subject, message, hp_company } = result.data;

    // Honeypot trip check
    if (hp_company && hp_company.length > 0) {
      // Silently accept to confound automated bots
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // 3. Dispatch via Resend if API key is provided
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "contact@adotshelor.com";

    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "AdotShelor Inquiry <onboarding@resend.dev>",
        to: toEmail,
        replyTo: email,
        subject: `[AdotShelor Studio] ${subject} (${serviceInterest})`,
        text: `Name: ${name}\nEmail: ${email}\nInterest: ${serviceInterest}\nSubject: ${subject}\n\nMessage:\n${message}`,
      });
    } else {
      // In development or when key is omitted, log securely without leaking
      console.log("[AdotShelor Contact Service] Validated message received:", {
        name,
        email,
        serviceInterest,
        subject,
        messageLength: message.length,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. We will review your message and reply directly.",
    });
  } catch (error) {
    // Never leak stack trace or internal details to the client
    console.error("[AdotShelor Contact Service Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while transmitting your message. Please try again or email contact@adotshelor.com directly." },
      { status: 500 }
    );
  }
}
