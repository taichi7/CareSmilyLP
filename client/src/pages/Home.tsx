import React from 'react';
import  Header from "../components/layout/Header";
import  Footer  from "../components/layout/Footer";
import  Hero  from "../components/sections/Hero";
import Concerns from "../components/sections/Concerns";
import ProductInfo from "../components/sections/ProductInfo";
import  Features  from "../components/sections/Features";
import Benefits from "../components/sections/Benefits";
import FAQ from "../components/sections/FAQ";
import NewsSection from "../components/sections/NewsSection";

const CareSmilyApp: React.FC = () => {

  return (
    <div className="flex overflow-hidden flex-col pb-12 bg-white">
      <Header />
      <Hero />
      <Concerns />
      <ProductInfo />
      <Features />
      <Benefits />
      <FAQ />
      <NewsSection />
      <Footer />
    </div>
  )
}

export default CareSmilyApp
