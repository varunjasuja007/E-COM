import React from "react";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tshirts from "./Components/T-Shirts/Tshirts";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />

    },
    {
      path: '/Tshirts',
      element: <Tshirts />
    }
  ])

  return <RounterProvider router={router} />
}


export default App;