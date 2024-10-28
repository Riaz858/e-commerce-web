import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const TopBrands = () => {
  interface TopBr {
    name: string;
    textColor: string;
    textBgColor: string;
    boxBgColor: string;
    imgSrc: string;
    logo: string;
    save: string;
    logoWidth: string;
    circleColor: string;
    circleLineColor: string;
  };
  const brands: TopBr[] = [
    {
      name: "IPHONE",
      textColor: "text-yellow-50",
      textBgColor: "bg-[#404040]",
      boxBgColor: "bg-[#303030]",
      imgSrc: "/brands/apple14.png",
      logo: "/brands/apple-logo1.png",
      save: "text-white pt-7",
      logoWidth: "w-24 h-12 mt-12 pr-10",
      circleColor: "bg-[#404040]",
      circleLineColor: "border-[#404040]",
    },
    {
      name: "REALME",
      textColor: "text-gray-800",
      textBgColor: "bg-[#f5dd8e]",
      boxBgColor: "bg-[#fff3cc]",
      imgSrc: "/brands/narzo-50.png",
      logo: "/brands/realme-logo.png ",
      save: "text-black pb-2",
      logoWidth: " mt-4",
      circleColor: "bg-[#f5dc8c]",
      circleLineColor: "border-[#f5dc8c]",
    },
    {
      name: "XIAOMI",
      textColor: "text-gray-800",
      textBgColor: "bg-[#f2c6a7]",
      boxBgColor: "bg-[#ffebde]",
      imgSrc: "/brands/xiaomi11i.png",
      logo: "/brands/xiomi-logo.png",
      save: "text-black pt-9",
      logoWidth: "w-18 h-16 mt-7",
      circleColor: "bg-[#f7cbab]",
      circleLineColor: "border-[#f7cbab]",
    },
  ];

  return (
    <div className="py-8 px-12 select-none">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          Top <span className="text-[#008fcc]">Electronic Brands</span>
        </h2>
        <Link href="#" className="flex items-center font-semibold">View All
          <span className="ml-2 mt-[2px]"><IoIosArrowForward/></span>
        </Link>
      </div>

      <div className="flex justify-between items-center gap-6 py-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`relative w-96 h-52 p-6 rounded-xl shadow-2xl text-white  ${brand.boxBgColor} overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105`}
          >
            <div
              className={`absolute -top-28 -right-[68px] w-64 h-64 rounded-full ${brand.circleColor}`}
            ></div>
            <div className={`absolute -top-[130px] -right-[86px] border-[1.5px] w-72 h-72 rounded-full ${brand.circleLineColor} `}></div>

            <div
              className={`absolute top-5 px-3 py-1 rounded-md text-sm font-bold ${brand.textColor} ${brand.textBgColor} `}
            >
              {brand.name}
            </div>

            <div className={`object-contain ${brand.logoWidth}`}>
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={100}
              />
            </div>
            <img
              src={brand.imgSrc}
              alt={brand.name}
              height={135}
              width={135}
              className="absolute left-56 bottom-2 object-contain transition-transform duration-300 ease-in-out hover:scale-110 "
            />
            <p className={`text-lg font-semibold ${brand.save}`}>
              UP TO 80% OFF
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
