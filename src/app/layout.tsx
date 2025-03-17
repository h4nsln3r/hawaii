import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import "./styles/globals.scss";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className="bg-gray-100">
        <Navbar />
        <main className="mx-auto p">{children}</main>
      </body>
    </html>
  );
}
