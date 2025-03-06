import { products } from "../../lib/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return notFound();

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
    </div>
  );
}
