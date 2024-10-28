import DailyEssentials from "./componenets/DailyEssentials";
import Hero from "./componenets/Hero";
import ProductSection from "./componenets/ProductSection";
import TopBrands from "./componenets/TopBrands";
import TopCategories from "./componenets/TopCategories";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductSection />
      <TopCategories />
      <TopBrands />
      <DailyEssentials />
    </main>
  );
}
