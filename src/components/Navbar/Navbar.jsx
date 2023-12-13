import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    // use theme from local storage if available or set light theme
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // sign out functionalities
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('you logged Out successfully');
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    // console.log('User:', user);

    // implement dark mode functionalities

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);




    const navLinks = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#EC272E]" : ""
        } >Home</NavLink></li>

        <li><NavLink to='/addProduct' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#EC272E]" : ""
        }>Add Product</NavLink></li>

        <li><NavLink to='/myCart' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#EC272E]" : ""
        }>My Cart</NavLink></li>

        <li><NavLink to='/feedback' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#EC272E]" : ""
        }>FeedBack</NavLink></li>


    </>



    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img className='w-28 md:w-40' src={'https://i.ibb.co/S5KY19V/logo.png'} alt="logo" /></Link>
                {/* <Link to='/'><h2 className='w-44 md:w-56 md:text-3xl font-bold'>Tech & Electric</h2></Link> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:text-lg font-semibold">
                    {navLinks}

                </ul>
            </div>

            {/* dark mode icon */}
            <div className='flex-none'>
                <label className="swap swap-rotate ">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox"
                        onChange={handleToggle}
                        // show toggle image based on localstorage theme
                        checked={theme === "light" ? false : true}
                    />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
            
            <div className="navbar-end">

                {/* <Link to='/login' className="px-10 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Login</Link> */}
                {
                    user ? <>

                        <div>
                            <div className="avatar online hidden md:mr-5 md:block">
                                <div className="w-[50px] rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                        </div>

                        <span className='hidden md:mr-5 md:block'>{user.displayName}</span>
                        <Link to='/' onClick={handleLogOut} className="px-10 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">LogOut</Link>
                    </>
                        :
                        <Link to='/login' className="px-10 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;