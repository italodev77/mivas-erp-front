import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mivas-ERP",
  description: "Sistema para gerenciamento de empresas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[100vh] flex items-center justify-center relative">
        {children}
      </body>
    </html>
  );
}
