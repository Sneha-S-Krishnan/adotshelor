import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AdotShelor.com — Software & Technology",
  description:
    "Official portfolio of AdotShelor.com. Engineering modern software solutions, digital products, and technology architecture.",
  metadataBase: new URL("https://adotshelor.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AdotShelor.com — Software & Technology",
    description:
      "Official portfolio of AdotShelor.com. Engineering modern software solutions, digital products, and technology architecture.",
    url: "https://adotshelor.com",
    siteName: "AdotShelor.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdotShelor.com — Software & Technology",
    description:
      "Official portfolio of AdotShelor.com. Engineering modern software solutions, digital products, and technology architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
        {children}
      </body>
    </html>
  );
}
