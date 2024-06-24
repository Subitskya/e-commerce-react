import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Products/Product';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <TopProducts />
    </div>
  );
};

export default App;