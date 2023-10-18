import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({brands}) => {

    const {_id, name, brand, type, price, rating, description, photo} = brands;

    // handle details
    // const handleDetails = (_id) =>{
    //     console.log(_id)
    // }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-[180px]' src={photo} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <div className='flex justify-between'>
                        <p>Brand: {brand}</p>
                        <p>Type: {type}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Rating: {rating}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <div className="card-actions justify-center">
                       <Link to={`/details/${_id}`}> <button className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Details</button></Link>
                        <Link to={`/update/${_id}`}><button className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;