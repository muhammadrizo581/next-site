"use client";
import React from "react";

const ProductView = ({ data }) => {
  return (
    <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6 mt-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="border rounded-[20px] p-4 text-center"
        >
          <img
            src={item.image}
            className="max-h-40 mx-auto"
          />
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      ))}
    </div>      
    </div>
  );
};

export default ProductView;
