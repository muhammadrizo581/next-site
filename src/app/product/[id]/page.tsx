import React from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

export async function generateMetadata({ params }: any) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: Product = await res.json();

  return {
    title: product.title,
    description: product.description,
  };
}

const ProductDetail = async ({ params }: any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: Product = await res.json();

  return (
    <div className="container mx-auto p-10">
      <div className="mt-[100px] grid grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[24px] font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
