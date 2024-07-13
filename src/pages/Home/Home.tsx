import Banner from '@/components/Banner/Banner';
import Navbar from '@/components/Navbar/Navbar';
import Categories from '@/components/categories/categories';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner/>
            <Categories/>
        </div>
    );
};

export default Home;