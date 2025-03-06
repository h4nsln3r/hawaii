"use client";

import { products } from "../../lib/products";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Product } from "../../types";

export default function ProductPage() {
  const params = useParams();
  const [cart, setCart] = useState<Product[]>([]);

  if (!params?.id) return notFound();

  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return notFound();

  const addToCart = () => {
    setCart([...cart, product]);
    alert(`${product.name} har lagts i varukorgen!`);
  };

  return (
    <div className="container mx-auto p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-semibold mt-2">{product.price} kr</p>
      <button
        onClick={addToCart}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Lägg i varukorgen
      </button>
    </div>
  );
}
