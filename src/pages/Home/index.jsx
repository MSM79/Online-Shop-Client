import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import NewsLetter from '../../components/NewsLetter';
import Category from '../../components/Category';

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Products title="Products" classs="py-16 sm:px-6 sm:py-24" />
      <Category />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
