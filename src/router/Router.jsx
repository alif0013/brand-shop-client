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
import UpdateProduct from '../pages/updateProduct/UpdateProduct';
import PrivateRoute from './PrivateRoute';

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
                element: <PrivateRoute> <AddProduct></AddProduct> </PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute> <MyCart></MyCart> </PrivateRoute> ,
                loader: () => fetch('http://localhost:5000/carts')
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
                element: <PrivateRoute> <ProductDetails></ProductDetails> </PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute> <UpdateProduct></UpdateProduct> </PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)

            }
        ]
    }

])

export default myCreatedRoutes;