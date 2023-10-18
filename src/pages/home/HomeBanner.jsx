import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/wKRk0jw/banner-bg2.jpg')]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/MSgWsVL/banner-one-main-img.png" className="max-w-md rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Your Brand For Future!</h1>
                        <p className="py-6">Modern technology are modern products, services and infrastructure that are designed and built using scientific knowledge and engineering. This includes information technology based on software, computers and networks</p>
                        <Link to='/' className="px-8 py-3 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;