import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartsCard from './CartsCard';
import Swal from 'sweetalert2';

const MyCart = () => {

    const loaddedCarts = useLoaderData();
    const [carts, setCarts] = useState(loaddedCarts);

    const handledelete = id => {
        console.log(id);
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
                            setCarts(remaining)
                        }
                    })


            }
        })
    }


    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold text-center md:text-4xl py-20'>Your Favourite Products</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    //  carts.map(cart => <CartsCard key={cart._id} loaddedCarts={cart}></CartsCard>)
                    carts.map(cart => <>


                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img className='h-[180px]' src={cart.photo} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{cart.name}</h2>
                                <div className='flex justify-between'>
                                    <p>Brand: {cart.brand}</p>
                                    <p>Brand: {cart.type}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Rating: {cart.rating}</p>
                                    <p>Price: ${cart.price}</p>
                                </div>

                                <div className="card-actions justify-end">
                                    {/* <Link to={`/details/${_id}`}> <button className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Details</button></Link> */}
                                    <button onClick={() => handledelete(cart._id)} className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Delete</button>

                                </div>
                            </div>
                        </div>



                    </>)
                }
            </div>
        </div>
    );
};

export default MyCart;