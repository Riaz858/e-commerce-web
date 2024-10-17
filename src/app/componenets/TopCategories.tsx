// components/TopCategories.js
export default function TopCategories() {
    const categories = [
      { name: 'Mobile', image: '/images/s22.png' },
      { name: 'Cosmetics', image: '/images/facewash.png' },
      { name: 'Electronics', image: '/images/electronics.png' },
      { name: 'Furniture', image: '/images/furniture.png' },
      { name: 'Watches', image: '/images/smart-watch.png' },
      { name: 'Decor', image: '/images/decor.png' },
      { name: 'Accessories', image: '/images/accessories.png' },
    ];
  
    return (
      <div className="py-10 select-none">
        <div className="flex justify-between items-center px-4">
          <h2 className="text-xl font-semibold">Shop From <span className="text-[#008fcc]">Top Categories</span></h2>
          <a href="#" className="text-[#008fcc]">View All &rarr;</a>
        </div>
        <div className="flex justify-center space-x-8 mt-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 rounded-full border-2 border-[#008fcc]  p-2">
                <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  