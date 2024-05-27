import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductDisplay from "../components/ProductDisplay";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductDisplay />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
