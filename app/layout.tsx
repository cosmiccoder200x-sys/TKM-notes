import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TKM S3–S8 Interactive Notes",
  description: "Exam-focused interactive notes for TKM College of Engineering, S3 to S8.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink-hi font-body antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
