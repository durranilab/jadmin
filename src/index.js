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
import Navigation from "./admin/pages/Navigation";
import Customers from "./admin/pages/Customers";


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
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

