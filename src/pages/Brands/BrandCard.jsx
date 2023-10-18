import React from 'react';

const BrandCard = ({brands}) => {

    const {_id, name, brand, type, price, rating, description, photo} = brands;


    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-[180px]' src={photo} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between'>
                        <p>{rating}</p>
                        <p>{price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;