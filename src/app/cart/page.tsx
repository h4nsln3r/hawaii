"use client";

import { useEffect, useState } from "react";
import { Product } from "../types";
import { getCart, removeFromCart, clearCart } from "../lib/cart";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (productId: number) => {
    removeFromCart(productId);
    setCart(getCart());
  };

  const handleCheckout = () => {
    clearCart();
    alert("Tack för ditt köp!");
    router.push("/");
  };

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
                  {item.name} - {item.price} kr
                </span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Ta bort
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Gå till kassan
            </button>
          </div>
        </>
      ) : (
        <p>Varukorgen är tom</p>
      )}
    </div>
  );
}
