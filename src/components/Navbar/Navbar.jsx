import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';
// import toast from 'react-hot-toast';

const Navbar = () => {

    // const { user, logOut } = useContext(AuthContext)

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => {
    //             toast.success('you logged Out successfully');
    //         })
    //         .catch(err => {
    //             toast.error(err.message)
    //         })
    // }

    // console.log('User:', user);


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


    </>



    return (
        <div className="navbar bg-base-100">
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
            <div className="navbar-end">

                <Link to='/login' className="px-10 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Login</Link>
                {/* {
                    user ? <>

                        <div>
                            <div className="avatar online hidden md:mr-5 md:block">
                                <div className="w-[50px] rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                        </div>

                        <span className='hidden md:mr-5 md:block'>{user.displayName}</span>
                        <Link to='/' onClick={handleLogOut} className="px-10 py-2 rounded bg-[#EC272E] text-white lg:text-lg font-semibold hover:bg-[#08A9E6]">LogOut</Link>
                    </>
                        :
                        <Link to='/login' className="px-10 py-2 rounded bg-[#EC272E] text-white lg:text-lg font-semibold hover:bg-[#08A9E6]">Login</Link>
                } */}

            </div>
        </div>
    );
};

export default Navbar;