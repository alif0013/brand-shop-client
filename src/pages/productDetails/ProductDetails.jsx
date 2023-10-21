import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {


    const products = useLoaderData()

    const { _id, name, brand, type, price, rating, description, photo } = products;

    const handleAddToCart = () =>{
            // send data to the server
            fetch('https://brand-shop-server-oxcuuqsbx-alif0013s-projects.vercel.app/carts',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(products)
    
               })
               .then(res => res.json())
               .then(data =>{
                console.log(data);
                if(data.insertedId){
                    toast.success('Product added Successfully!')
                }
               })
    

    }

    return (
        <div className='mt-16 md:w-[500px] mx-auto border shadow-md mb-20'>
            <div className="card bg-base-100">
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

                    <p>{description}</p>

                    <div className="card-actions justify-center">
                        {/* <Link to={`/myCart/${_id}`}> <button className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Add to Cart</button></Link> */}

                        <button onClick={handleAddToCart} className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;