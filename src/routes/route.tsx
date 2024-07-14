import App from "@/App";
import UpdateProductForm from "@/components/form/UpdateProduct/UpdateProductForm";
import Dashboard from "@/components/layout/Dashboard";

import MainLayout from "@/components/layout/MainLayout";
import Cart from "@/pages/Cart/Cart";

import ProductManagement from "@/pages/Dashboard/ProductManagement/ProductManagement";

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
        path: "cart",
        element: <Cart />,
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
