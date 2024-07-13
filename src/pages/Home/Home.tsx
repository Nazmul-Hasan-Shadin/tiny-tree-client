import Banner from '@/components/Banner/Banner';
import Navbar from '@/components/Navbar/Navbar';
import Categories from '@/components/categories/categories';
import Products from '@/components/products/Products';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner/>
            <Categories/>
            <Products/>
        </div>
    );
};

export default Home;