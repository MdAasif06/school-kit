

import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
import HeroClient from "@/components/HeroClient";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroClient />
        <Products />
        <Categories />
      </main>
      <Footer />
    </>
  );
}
