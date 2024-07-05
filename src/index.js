import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CheckLogin from "./admin/pages/CheckLogin";
import Dashboard from "./admin/pages/Dashboard";
import Customers from "./admin/pages/Customers";
import Products from "./admin/pages/Products";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/admin",
        element: <CheckLogin/>,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard/>,
            },
            {
                path: "/admin/customers",
                element: <Customers/>,
            },
            {
                path: "/admin/products",
                element: <Products/>,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

