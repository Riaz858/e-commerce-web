import React from 'react';

const products = [
  {
    name: "Galaxy S22 Ultra",
    price: "Rs.115999",
    oldPrice: "Rs.25999",
    discount: "56% OFF",
    save: "Rs.32999",
    img: "/images/s22-ultra.webp"
  },
  {
    name: "Galaxy M13 (4GB | 64 GB)",
    price: "Rs.10499",
    oldPrice: "Rs.14999",
    discount: "56% OFF",
    save: "Rs.4500",
    img: "/images/M13.jpg"
  },
  {
    name: "Galaxy M33 (4GB | 64 GB)",
    price: "Rs.11499",
    oldPrice: "Rs.14999",
    discount: "56% OFF",
    save: "Rs.4500",
    img: "/images/sm33.webp"
  },
  {
    name: "Galaxy A53 (4GB | 64 GB)",
    price: "Rs.16499",
    oldPrice: "Rs.20999",
    discount: "56% OFF",
    save: "Rs.4500",
    img: "/images/53.jpg"
  },
  {
    name: "Galaxy S22 (4GB | 64 GB)",
    price: "Rs.22499",
    oldPrice: "Rs.30999",
    discount: "56% OFF",
    save: "Rs.4500",
    img: "/images/s22.png"
  },
  // Add more products as needed
];

export default function ProductSection() {
  return (
    <div className="py-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Grab the best deal on <span className="text-blue-500">Smartphones</span></h2>
        <a href="#" className="text-blue-500">View All</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg relative">
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">{product.discount}</div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 line-through">{product.oldPrice}</p>
            <p className="text-xl font-bold text-green-600">{product.price}</p>
            <p className="text-green-500">Save - {product.save}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
