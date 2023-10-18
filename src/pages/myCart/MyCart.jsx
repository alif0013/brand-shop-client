import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartsCard from './CartsCard';

const MyCart = () => {

    const loaddedCarts = useLoaderData()
    const [carts, setCarts] = useState(loaddedCarts)

    return (
        <div>
             <div>
                <h1 className='text-2xl font-bold text-center md:text-4xl py-20'>Your Favourite Products</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
               {
                 carts.map(cart => <CartsCard key={cart._id} carts={cart}></CartsCard>)
               }
            </div>
        </div>
    );
};

export default MyCart;