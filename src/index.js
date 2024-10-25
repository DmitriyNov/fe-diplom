import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import StartPage from './components/start_page/StartPage';
import OrderPage from './components/order/OrderPage';
import Trains from "./components/tickets/Trains";
import Places from "./components/tickets/Places";
import Tickets from "./components/tickets/Tickets";
import Passengers from "./components/passengers/Passengers";
import Payment from "./components/payment/Payment";
import Verification from "./components/verification/Verification";


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
            path: "/order/tickets",
            element: <Tickets />,
            children: [
              {
                path: "/order/tickets/train",
                element: <Trains />,
              },
              {
                path: "/order/tickets/places",
                element: <Places />,
              }
            ]
          },
          {
            path: "/order/passengers",
            element: <Passengers />,
          },
          {
            path: "/order/payment",
            element: <Payment />,
          },
          {
            path: "/order/verification",
            element: <Verification />,
          },
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
