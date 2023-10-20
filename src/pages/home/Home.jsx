import React from 'react';
import HomeBanner from './HomeBanner';
import WeLike from './WeLike';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Home = () => {

    const categories = useLoaderData()
// console.log(categories);

    return (
        <div>
            <HomeBanner></HomeBanner>
            <div>
                <div className='mt-10 text-center'>
                    <h1 className='text-xl md:text-4xl font-bold'>WHAT MAKES THE ESSENTIAL DIFFERENT?</h1>
                <p className='mt-3 mb-10'>EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-center justify-center'>
                    <div className='text-center'>
                        <img className='mx-auto pb-4' src="https://i.ibb.co/Pht2zB3/ic12.png" alt="" />
                        <h3>PERFECT CUT</h3>
                        <h1>Dual Camera</h1>
                        <p>Tristique senectus et netus <br /> et malesuada ant reiet fames.</p>
                    </div>
                    <div>
                        <img className='ml-40 lg:ml-36 pb-4' src="https://i.ibb.co/sFgNPqk/ic13.png" alt="" />
                        <h3>PERFECT CUT</h3>
                        <h1>Dual Camera</h1>
                        <p>Tristique senectus et netus <br /> et malesuada ant reiet fames.</p>
                    </div>
                    <div>
                        <img className='ml-40 lg:ml-36 pb-4' src="https://i.ibb.co/PYk6GV7/ic11.png" alt="" />
                        <h3>PERFECT CUT</h3>
                        <h1>Dual Camera</h1>
                        <p>Tristique senectus et netus <br /> et malesuada ant reiet fames.</p>
                    </div>

                </div>

            </div>
            
            {/* brand section */}
            <div className='mt-20'>
                <h1 className='text-2xl md:text-4xl font-bold mb-10 text-center'>Our Latest Brand</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                   {
                    categories.map(brand => <Category key={brand.id} brand={brand}></Category>)
                   }
                </div>
            
            </div>


            <div>
                <WeLike></WeLike>
            </div>

        </div>
    );
};

export default Home;