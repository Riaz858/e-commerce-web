import Image from "next/image";
import Link from "next/link";

const TopBrands = () => {
  const brands = [
    {
      name: "IPHONE",
      textColor: "text-yellow-50",
      textBgColor: "bg-[#404040]",
      boxBgColor: "bg-[#303030]",
      imgSrc: "/brands/apple14.png",
      logo: "/brands/apple-logo.jpg",
      save: "text-white pt-7",
      logoWidth: "w-24 h-12 mt-12 pr-10 rounded-full",
    },
    {
      name: "REALME",
      textColor: "text-gray-800",
      textBgColor: "bg-[#f5dd8e]",
      boxBgColor: "bg-[#fff3cc]",
      imgSrc: "/brands/realme.png",
      logo: "/brands/realme-logo.png ",
      save: "text-black pb-2",
      logoWidth: "w-32 h-34 mt-5",
      
    },
    {
      name: "XIAOMI",
      textColor: "text-gray-800",
      textBgColor: "bg-[#f2c6a7]",
      boxBgColor: "bg-[#ffebde]",
      imgSrc: "/brands/xiaomi11i.png",
      logo: "/brands/xiomi-logo.png",
      save: "text-black pt-7",
      logoWidth: "w-18 h-16 mt-7",
    },
  ];

  return (
    <div className="py-8 px-12 select-none">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          Top <span className="text-[#008fcc]">Electronic Brands</span>
        </h2>
        <Link href="#">
          <span className="text-[#008fcc] items-center">View All &rarr;</span>
        </Link>
      </div>

      <div className="flex justify-between items-center gap-6 py-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`relative w-96 h-48 p-6 rounded-xl shadow-lg text-white  ${brand.boxBgColor}`}
          >
            <div
              className={`absolute top-6  bg-white text-black px-3 py-1 rounded-md text-sm font-bold ${brand.textColor} ${brand.textBgColor} `}
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
              height={100}
              width={100}
              className="absolute bottom-1 ml-24 w-full h-40 gap-4 object-contain mb-4 "
            />
            <p className={` text-lg font-semibold ${brand.save}`}>
              UP TO 80% OFF
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
