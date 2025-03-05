// app/products/page.tsx
"use client"; // 👈 Gör denna komponent till en klientkomponent

import { useState } from "react";
import { products } from "../lib/products";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";

export default function ProductsPage() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Våra produkter</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
