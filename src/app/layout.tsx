import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedBank — Kahoot-Style Medical MCQ Quiz",
  description: "A full-stack quiz web app for Medical MCQs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-body font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
