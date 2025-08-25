import type { Metadata } from "next";
import "./globals.css";
import ClientSideLayout from "./clientside-layout";
import { ThemeProvider } from "next-themes";

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientSideLayout>{children}</ClientSideLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
