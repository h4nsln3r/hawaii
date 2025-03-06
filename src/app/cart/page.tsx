"use client";

import { useEffect, useState } from "react";
import { Product } from "../types";
import { getCart, addToCart, removeFromCart } from "../lib/cart";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleIncrease = (product: Product) => {
    addToCart(product);
    setCart(getCart());
  };

  const handleDecrease = (productId: number) => {
    removeFromCart(productId);
    setCart(getCart());
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Varukorg</h1>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b p-2"
              >
                <span>
                  {item.name} - {item.price} kr (x{item.quantity})
                </span>
                <div>
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mx-1"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncrease(item)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mx-1"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-bold">Total: {totalPrice} kr</div>
          <div className="mt-4">
            <Link
              href="/checkout"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Gå till kassan
            </Link>
          </div>
        </>
      ) : (
        <p>Varukorgen är tom</p>
      )}
    </div>
  );
}
