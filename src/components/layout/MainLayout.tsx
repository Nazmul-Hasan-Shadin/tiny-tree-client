import App from '@/App';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useAppSelector } from '@/redux/hook';

const MainLayout = () => {
    const product=useAppSelector((state)=>state.cart.products)

    useEffect(()=>{
      const handleBeforeUnload =(e:BeforeUnloadEvent)=>{
        if (product.length>0) {
          let message='if you refresh cart will get empty '
          e.preventDefault()
          e.returnValue=message
          console.log('iam trigerd');
          
          return message
       }
      }
      window.addEventListener("beforeunload", handleBeforeUnload);
  
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
      
    },[product])
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