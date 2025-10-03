"use client";
import React from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductView = ({ data }: { data: Product[] }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-6 mt-10">
        {data.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <div className="border max-h-[300px] h-full rounded-[20px] p-4 text-center cursor-pointer hover:shadow-lg transition">
              <img src={item.image} className="max-h-40 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
