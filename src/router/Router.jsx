import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import ErrorPage from '../errorPage/ErrorPage';
import Home from '../pages/home/Home';
import AddProduct from '../pages/addProduct/AddProduct';
import MyCart from '../pages/myCart/MyCart';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';
import Brands from '../pages/Brands/Brands';
import ProductDetails from '../pages/productDetails/ProductDetails';

const myCreatedRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('category.json')
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
            },
            {
                path: '/brand',
                element: <Brands></Brands>,
                loader: ()=> fetch('http://localhost:5000/products')

            },
            {
                path: '/details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }

])

export default myCreatedRoutes;