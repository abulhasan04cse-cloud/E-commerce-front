import Hero from '@/components/home/Hero';
import CategoryGrid from '@/components/home/CategoryGrid';
import FlashSale from '@/components/home/FlashSale';
import TrendingProducts from '@/components/home/TrendingProducts';
import BestSellers from '@/components/home/BestSellers';
import PromoBanners from '@/components/home/PromoBanners';
import RecommendedProducts from '@/components/home/RecommendedProducts';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FlashSale />
      <TrendingProducts />
      <BestSellers />
      <PromoBanners />
      <RecommendedProducts />
      <Newsletter />
    </>
  );
}
