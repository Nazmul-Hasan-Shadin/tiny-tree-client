import App from '@/App';
import MainLayout from '@/components/layout/MainLayout'
import Cart from '@/pages/Cart/Cart';
import ProductManagement from '@/pages/ProductManagement/ProductManagement';
import {createBrowserRouter} from 'react-router-dom'


export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
    
      children: [
        {
          path: "/",
          element: <App></App>,
        },
        {
            path: "management",
            element: <ProductManagement />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
      ],
    },
  ]);