import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar/sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MiBiS | Mali İşler Bilgi İşlem Sistemi",
  description: "MiBiS Mali İşler Bilgi İşlem Sistemi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex md:flex-row flex-col h-screen overflow-hidden">
          <div className="md:flex-shrink-0 md:overflow-y-auto md:sticky md:top-0 md:h-screen">
            <SideBar />
          </div>
          <main className="flex-grow overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}