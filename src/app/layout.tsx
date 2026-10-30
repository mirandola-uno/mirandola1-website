import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import ClientSideLayout from "./clientside-layout";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: "Gruppo Scout Mirandola 1",
  description: "Del nostro meglio per essere pronti a servire",
};

export const viewport: Viewport = {
  themeColor: "#462678",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientSideLayout>{children}</ClientSideLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
