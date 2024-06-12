import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Item from "./Item.jsx";
import CartDetail from "./CartDetail.jsx";
import Checkout from "./Checkout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Item />,
  },
  {
    path: "/iphone-15-pro-max",
    element: <Item />,
  },
  {
    path: "/cart-detail",
    element: <CartDetail />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
