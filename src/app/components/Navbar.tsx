// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">Hawaii Shop</h1>
        </Link>
        <div>
          <Link href="/products" className="px-4">Produkter</Link>
          <Link href="/cart" className="px-4">Varukorg</Link>
        </div>
      </div>
    </nav>
  );
}