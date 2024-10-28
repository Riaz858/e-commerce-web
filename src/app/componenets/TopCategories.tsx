import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function TopCategories() {
  interface TopCategories {
    name: string;
    image: string;
  }
  const categories: TopCategories[] = [
    { name: "Mobile", image: "/images/s22.png" },
    { name: "Cosmetics", image: "/images/facewash.png" },
    { name: "Electronics", image: "/images/electronics.png" },
    { name: "Furniture", image: "/images/furniture.png" },
    { name: "Watches", image: "/images/smart-watch.png" },
    { name: "Decor", image: "/images/decor.png" },
    { name: "Accessories", image: "/images/accessories.png" },
  ];

  return (
    <div className="py-12 px-4 sm:px-8 select-none">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold">
          Shop From <span className="text-[#008fcc]">Top Categories</span>
        </h2>
        <div className="relative group">
          <Link href="#" className="flex items-center font-semibold">
            View All
            <span className="ml-1 mt-1">
              <IoIosArrowForward />
            </span>
          </Link>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#008fcc] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </div>

      <div className="border-b mt-6"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-[#008fcc] p-2">
              <Image
                src={category.image}
                alt={category.name}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-sm sm:text-base">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
