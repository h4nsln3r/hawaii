// app/checkout/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Product } from "../types";
import { getCart, clearCart } from "../lib/cart";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handlePayment = async () => {
    alert("Betalning påbörjad...");
    setTimeout(() => {
      clearCart();
      alert("Betalning genomförd! Tack för ditt köp!");
      router.push("/");
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Kassa</h1>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="border-b p-2">
                {item.name} - {item.price} kr (x{item.quantity})
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-bold">Total: {totalPrice} kr</div>
          <div className="mt-4">
            <button
              onClick={handlePayment}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Betala nu
            </button>
          </div>
        </>
      ) : (
        <p>Varukorgen är tom</p>
      )}
    </div>
  );
}
