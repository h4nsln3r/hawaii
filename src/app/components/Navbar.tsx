import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/hawaii_logo.png"  // Bilden måste ligga i public/
            alt="Företagslogga"
            width={150} 
            height={50}
            priority // Optimerar laddning för navbaren
          />
        </Link>
        <div>
          <Link href="/products" className="px-4">Produkter</Link>
          <Link href="/cart" className="px-4">Varukorg</Link>
        </div>
      </div>
    </nav>
  );
}
