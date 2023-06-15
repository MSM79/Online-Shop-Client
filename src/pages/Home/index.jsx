import React from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import NewsLetter from '../../components/NewsLetter';

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
