import type { Metadata } from "next";
import "../styles/globals.css";
import { inter } from "@/lib/fonts";
import { ThemeProvider } from "@/provider/theme-provider";
import ToggleTheme from "@/components/toggle-theme";

export const metadata: Metadata = {
  title: "PixelForce",
  description: "PixelForce - сила в каждом пикселе",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} antialiased dark:bg-neutral-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToggleTheme />
        </ThemeProvider>
      </body>
    </html>
  );
}
