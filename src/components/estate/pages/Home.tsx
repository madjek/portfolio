'use client';

import FeaturedProperties from '../home/FeaturedProperties';
import Hero from '../home/Hero';
import Testimonials from '../home/Testimonials';
import TopCities from '../home/TopCities';
import WhyProEstate from '../home/WhyProEstate';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <FeaturedProperties />
      <TopCities />
      <WhyProEstate />
      <Testimonials />
    </div>
  );
}
