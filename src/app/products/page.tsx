// app/products/page.tsx
"use client";

import { products } from "../lib/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Våra produkter</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
