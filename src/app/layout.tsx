import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#060D17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AdotShelor — Technology Crafted for Purpose",
  description:
    "We turn problems into solutions, ideas into products, and projects into practical understanding. An independent technology and product development studio.",
  metadataBase: new URL("https://adotshelor.com"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AdotShelor — Technology Crafted for Purpose",
    description:
      "We turn problems into solutions, ideas into products, and projects into practical understanding. An independent technology and product development studio.",
    url: "https://adotshelor.com",
    siteName: "AdotShelor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdotShelor — Technology Crafted for Purpose",
    description:
      "Independent technology and product development studio. Building digital products that endure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preload" as="video" href="/hero-loop.mp4" />
      </head>
      <body className="min-h-full flex flex-col bg-[#060D17] text-white selection:bg-[#00D2EE]/30 selection:text-[#38BDF8]">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
