import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online course",
  description: "Online course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="flex flex-col min-h-[100dvh]">
          <Header />
          <main className="flex-1 mt-14">{children}</main>
          <footer className="p-4">
            <div className="text-center text-muted-foreground">
              &copy; 2024 Online Course Platform. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
