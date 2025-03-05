// app/layout.tsx
import { ReactNode } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className="bg-gray-100">
        {/* <Navbar /> */}
        <main className="container mx-auto p-4">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
