import Banner from '@/components/Banner/Banner';
import Navbar from '@/components/Navbar/Navbar';
import Categories from '@/components/categories/categories';
import Products from '@/components/products/Products';
import React from 'react';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
           
            <Banner/>
            <Categories/>
            <Products/>
            <Footer></Footer>
        </div>
    );
};

export default Home;