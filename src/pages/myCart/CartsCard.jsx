import React, { useState } from 'react';

import Swal from 'sweetalert2';

const CartsCard = ({ loaddedCarts }) => {

    const { _id, name, brand, type, price, rating, description, photo } = loaddedCarts;
    const [carts, setCart] = useState(loaddedCarts)

    const handledelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
               const remaining = carts.filter(cart => cart._id !== id)
                            setCart(remaining)
                        }
                    })


            }
        })
    }


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
                         <button  onClick={() => handledelete(_id)} className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Delete</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartsCard;