import React from 'react';
import { Link } from 'react-router-dom';

const WeLike = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src="https://i.ibb.co/q9Z5G0k/project-start1.png" className="md:max-w-md rounded-lg" />
                    <div className="bg-[url('https://i.ibb.co/ZgZ6pf7/vector-shape3.png')]">
                        <h1 className="text-5xl font-bold">We Like to Start Your Project With Us</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <Link to='/' className="px-8 py-3 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default WeLike;