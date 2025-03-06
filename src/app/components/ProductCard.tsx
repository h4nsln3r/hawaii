// components/ProductCard.tsx
"use client"; // 👈 Gör denna komponent till en klientkomponent

import { FC } from "react";
import { Product } from "../types";
import Link from "next/link";

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: FC<Props> = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
      </Link>
      <Link href={`/products/${product.id}`}>
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      </Link>
      <p className="text-gray-600">{product.price} kr</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Lägg i varukorgen
      </button>
    </div>
  );
};

export default ProductCard;
