import App from '@/App';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>

           <main>
            <Outlet></Outlet>
           </main>
        </div>
    );
};

export default MainLayout;