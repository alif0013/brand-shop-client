import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import ErrorPage from '../errorPage/ErrorPage';
import Home from '../pages/home/Home';
import AddProduct from '../pages/addProduct/AddProduct';
import MyCart from '../pages/myCart/MyCart';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';

const myCreatedRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }

])

export default myCreatedRoutes;