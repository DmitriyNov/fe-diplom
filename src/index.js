import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import StartPage from './components/start_page/StartPage';
import OrderPage from './components/order_tickets/OrderPage';
import Trains from "./components/order_tickets/Trains";
import Places from "./components/order_tickets/Places";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/main",
        element: <StartPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
        children: [
          {
            path: "/order/train",
            element: <Trains />,
          },
          {
            path: "/order/places",
            element: <Places />,
          },
          // {
          //   path: "/order/passengers",
          //   element: <Passengers />,
          // },
          // {
          //   path: "/order/payment",
          //   element: <Payment />,
          // },
          // {
          //   path: "/order/check",
          //   element: <Check />,
          // },
        ],
      },
      // {
      //   path: "/confirmation",
      //   element: <Confirmation />,
      // },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
