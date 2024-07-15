import App from "@/App";
import UpdateProductForm from "@/components/form/UpdateProduct/UpdateProductForm";
import Dashboard from "@/components/layout/Dashboard";

import MainLayout from "@/components/layout/MainLayout";
import Products from "@/components/products/Products";
import Cart from "@/pages/Cart/Cart";

import ProductManagement from "@/pages/Dashboard/ProductManagement/ProductManagement";
import Product from "@/pages/Product/Product";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "products",
        element: <Product/>,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/productDetails/:id",
        element:<ProductDetails/>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,

    children: [
      {
        index: true,

        element: <ProductManagement />,
      },
      {
        path: "add-product",
        element: <UpdateProductForm isUpdate={false} />,
      },
    ],
  },
]);
