import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Expiry Notifier — Never let API keys expire again",
  description: "Monitors API key expiration dates across services and sends renewal reminders with rotation instructions. Built for DevOps teams and backend developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e4796527-bb85-42e7-8082-4e2bbb56fd49"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
