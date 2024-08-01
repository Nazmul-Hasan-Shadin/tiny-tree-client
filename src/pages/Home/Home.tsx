import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Banner from "@/components/Banner/Banner";

import Categories from "@/components/categories/categories";
import Products from "@/components/products/Products";

import Footer from "../Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";

const Home = () => {



AOS.init();

  return (
    <div>
      <Banner />
      <Categories />
      <Products />
      <Gallery/>
      <Footer></Footer>
    </div>
  );
};

export default Home;
