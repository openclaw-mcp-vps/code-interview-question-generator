import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeInterview.ai — Generate Unique Coding Problems for Technical Interviews",
  description: "AI-powered coding problem generator for tech recruiters and engineering managers. Create original interview questions based on job requirements and difficulty levels."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bbc55f42-eac0-4ca2-a0c4-99df67396c79"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
