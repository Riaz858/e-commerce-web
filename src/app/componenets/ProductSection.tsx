import Image from "next/image";
import Link from "next/link";

interface Products {
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  save: string;
  img: string;
}
export default function ProductSection() {
  const products: Products[] = [
    {
      name: "Galaxy S22 Ultra",
      price: "Rs.115999",
      oldPrice: "Rs.25999",
      discount: "56% OFF",
      save: "Rs.32999",
      img: "/images/s22-ultra.webp",
    },
    {
      name: "Galaxy M13 (4GB | 64 GB)",
      price: "Rs.10499",
      oldPrice: "Rs.14999",
      discount: "56% OFF",
      save: "Rs.4500",
      img: "/images/M13.jpg",
    },
    {
      name: "Galaxy M33 (4GB | 64 GB)",
      price: "Rs.11499",
      oldPrice: "Rs.14999",
      discount: "56% OFF",
      save: "Rs.4500",
      img: "/images/sm33.webp",
    },
    {
      name: "Galaxy A53 (4GB | 64 GB)",
      price: "Rs.16499",
      oldPrice: "Rs.20999",
      discount: "56% OFF",
      save: "Rs.4500",
      img: "/images/53.jpg",
    },
    {
      name: "Galaxy S22 (4GB | 64 GB)",
      price: "Rs.22499",
      oldPrice: "Rs.30999",
      discount: "56% OFF",
      save: "Rs.4500",
      img: "/images/s22.png",
    },
  ];

  return (
    <div className="py-12 px-8 select-none">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Grab the best deal on{" "}
          <span className="text-[#008fcc]">Smartphones</span>
        </h2>
        <Link href="#">
          <span className="text-gray-900">View All</span>
        </Link>
      </div>
      <div className="border bottom-1 mt-6"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-9 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg relative overflow-hidden group hover:shadow-2xl border-b-2"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={200}
              loading="lazy"
              className="w-full h-40 object-contain mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
              {product.discount}
            </div>

            <h3 className="text-base font-medium">{product.name}</h3>
            <p className="text-lg font-bold text-green-600">
              {product.price}{" "}
              <span className="text-gray-600 text-base font-normal ml-2 line-through">
                {product.oldPrice}
              </span>
            </p>
            <div className="border-b-[1px] bg-black mt-2"></div>
            <p className="text-green-500">Save - {product.save}</p>

            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#008fcc] transition-all duration-300 group-hover:w-full mt-8"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
