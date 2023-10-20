import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandBanner from './BrandBanner';
import BrandCard from './BrandCard';

const Brands = () => {

    const brands = useLoaderData()
    // console.log(brands);
 

    return (
        <div>
            <div>
                <BrandBanner></BrandBanner>
            </div>

            <div>
                <h1 className='text-2xl font-bold text-center md:text-4xl py-20'>Out Products</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {
                    brands.map(brand => <BrandCard key={brand._id} brands={brand}></BrandCard>)
                }
            </div>

        </div>
    );
};

export default Brands;