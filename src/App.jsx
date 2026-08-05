import React from "react";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tshirts from "./Components/T-Shirts/Tshirts";
import Shirts from "./Components/Shirts/Shirts";
import Jeans from "./Components/Jeans/Jeans";
import AllProducts from "./Components/AllProducts/AllProducts";
import Layout from "./Components/Layout/Layout";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/Tshirts',
          element: <Tshirts />
        },
        {
          path: '/Shirts',
          element: <Shirts />
        },
        {
          path: '/Jeans',
          element: <Jeans />
        },
        {
          path: '/allproducts',
          element: <AllProducts />
        }
      ]
    },
  ])

  return <RouterProvider router={router} />;
}


export default App;