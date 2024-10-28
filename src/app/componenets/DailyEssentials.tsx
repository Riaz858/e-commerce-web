// import Image from "next/image";
// import Link from "next/link";
// import { IoIosArrowForward } from "react-icons/io";

// const DailyEssentials = () => {
//   interface Essential {
//     name: string;
//     img: string;
//     save: string;
//     imgWidth: string;
//   }

//   const essentials: Essential[] = [
//     {
//       name: "Daily Essential",
//       img: "/essentials/red-basket2.png",
//       save: "Up to 50% OFF",
//       imgWidth: "w-44 h-44",
//     },
//     {
//       name: "Vegitables",
//       img: "/essentials/vegitable2.png",
//       save: "Up to 50% OFF",
//       imgWidth: "w-44 h-44",
//     },
//     {
//       name: "Fruits",
//       img: "/essentials/fruit2.png",
//       save: "Up to 50% OFF",
//       imgWidth: "w-44 h-44",
//     },
//     {
//       name: "Strawberry",
//       img: "/essentials/strawberries.png",
//       save: "Up to 50% OFF",
//       imgWidth: "w-44 h-44",
//     },

//     {
//       name: "Mango",
//       img: "/essentials/mango2.png",
//       save: "Up to 50% OFF",
//       imgWidth: "w-44 h-44",
//     },
//     {
//       name: "Cherry",
//       img: "/essentials/cherries2.png",
//       save: "Up to 50% OFF",
//       imgWidth: "w-44 h-44",
//     },
//   ];

//   return (
//     <section className="px-8 py-12 select-none">
//       <div className="flex justify-between items-center ">
//         <h2 className="font-bold text-2xl">
//           Daily <span className="text-[#008fcc]">Essentials</span>
//         </h2>
//         <div className="relative group">
//           <Link
//             href={"#"}
//             className="flex items-center font-semibold"
//           >
//             View All
//             <span className="ml-2 mt-[2px]">
//               <IoIosArrowForward />
//             </span>
//           </Link>
//           <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#008fcc] transition-all duration-300 group-hover:w-full"></span>
//         </div>
//       </div>
//       <div className="border bottom-1 mt-6"></div>
//       <div className="flex justify-between items-center py-12">
//         {essentials.map((product, index) => (
//           <div
//             key={index}
//             className="relative p-1 w-auto h-60 shadow-2xl rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-110"
//           >
//             <div className="bg-[#f5f5f5] rounded-xl">
//               <Image
//                 src={product.img}
//                 alt={product.name}
//                 width={150}
//                 height={150}
//                 className={product.imgWidth}
//               />
//             </div>
//             <div className="text-center mt-2 text-gray-500 font-semibold">
//               {product.name}
//             </div>
//             <div className="text-center mt-1 font-medium text-gray-900">
//               {product.save}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default DailyEssentials;



import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const DailyEssentials = () => {
  interface Essential {
    name: string;
    img: string;
    save: string;
    imgWidth: string;
  }

  const essentials: Essential[] = [
    { name: "Daily Essential", img: "/essentials/red-basket2.png", save: "Up to 50% OFF", imgWidth: "w-44 h-44" },
    { name: "Vegetables", img: "/essentials/vegitable2.png", save: "Up to 50% OFF", imgWidth: "w-44 h-44" },
    { name: "Fruits", img: "/essentials/fruit2.png", save: "Up to 50% OFF", imgWidth: "w-44 h-44" },
    { name: "Strawberry", img: "/essentials/strawberries.png", save: "Up to 50% OFF", imgWidth: "w-44 h-44" },
    { name: "Mango", img: "/essentials/mango2.png", save: "Up to 50% OFF", imgWidth: "w-44 h-44" },
    { name: "Cherry", img: "/essentials/cherries2.png", save: "Up to 50% OFF", imgWidth: "w-44 h-44" },
  ];

  return (
    <section className="px-8 py-12 select-none">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">
          Daily <span className="text-[#008fcc]">Essentials</span>
        </h2>
        <div className="relative group">
          <Link href="#" className="flex items-center font-semibold" role="button">
            View All
            <span className="ml-2 mt-[2px]">
              <IoIosArrowForward />
            </span>
          </Link>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#008fcc] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </div>
      <div className="border-b border-gray-300 mt-6"></div>
      <div className="flex flex-wrap justify-center sm:justify-between items-center py-12 gap-y-5">
        {essentials.map((product, index) => (
          <div
            key={index}
            className="relative p-1 w-auto h-60 shadow-2xl rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-110"
          >
            <div className="bg-[#f5f5f5] rounded-xl">
              <Image
                src={product.img}
                alt={`Image of ${product.name}`}
                width={150}
                height={150}
                className={product.imgWidth}
                loading="lazy"
              />
            </div>
            <div className="text-center mt-2 text-gray-500 font-semibold">
              {product.name}
            </div>
            <div className="text-center mt-1 font-medium text-gray-900">
              {product.save}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyEssentials;
