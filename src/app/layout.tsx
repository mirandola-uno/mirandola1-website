import type { Metadata } from "next";
import "./globals.css";
import ClientSideLayout from "./clientside-layout";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

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
      <Head>
        {/* For Safari on iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* For Safari top bar (iOS 15+) */}
        <meta name="theme-color" content="#462678" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#462678" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#462678" media="(prefers-color-scheme: no-preference)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Gruppo Scout Mirandola 1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientSideLayout>{children}</ClientSideLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
