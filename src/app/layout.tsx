import type { Metadata } from "next";
import "./globals.css";
import ClientSideLayout from "./clientside-layout";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Gruppo Scout Mirandola 1",
  description: "Del nostro meglio per essere pronti a servire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#462678" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientSideLayout>{children}</ClientSideLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
