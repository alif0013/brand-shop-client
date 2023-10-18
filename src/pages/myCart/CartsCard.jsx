import React from 'react';
import { Link } from 'react-router-dom';

const CartsCard = ({ carts }) => {

    const { _id, name, brand, type, price, rating, description, photo } = carts;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-[180px]' src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between'>
                        <p>Brand: {brand}</p>
                        <p>Brand: {type}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Rating: {rating}</p>
                        <p>Price: ${price}</p>
                    </div>
                    
                    <div className="card-actions justify-end">
                        {/* <Link to={`/details/${_id}`}> <button className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Details</button></Link> */}
                        <Link to={`/`}> <button className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Delete</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartsCard;