import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../pages/footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayouts;