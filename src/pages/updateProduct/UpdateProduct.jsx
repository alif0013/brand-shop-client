import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {

    const products = useLoaderData()
    const { _id, name, brand, type, price, rating, description, photo } = products;


    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const updateProduct = { name, brand, type, price, rating, description, photo }

        console.log(updateProduct);

           // send data to the server
           fetch(`https://brand-shop-server-ravd25tj8-alif0013s-projects.vercel.app/products/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)

           })
           .then(res => res.json())
           .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Product Updated Successfully!')
            }
           })




    }


    return (
        <div className='md:w-[1200px] text-center p-20 md:mx-auto bg-[#F4F3F0]'>

            <div className='text-center'>
                <h1 className='text-5xl mb-5'>Update New Product</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            </div>

            <form onSubmit={handleUpdateProduct}>
                <div className='mt-3'>
                    <input type="text" name='name' defaultValue={name} placeholder="Name" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                    <input type="text" name='brand' defaultValue={brand} placeholder="Brand name" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className='mt-3'>
                    <input type="text" name='type' defaultValue={type} placeholder="Type" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                    <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className='mt-3'>
                    <input type="text" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered w-full max-w-xs mr-5 mb-3" />
                    <input type="text" name='description' defaultValue={description} placeholder="Short Description" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className='mt-3'>
                    <input type="text" name='photo' defaultValue={photo} placeholder="photo url" className="input input-bordered w-full max-w-xs" />

                </div>

                <button type='submit' className="btn md:w-[660px] text-white text-center bg-gradient-to-r from-[#4A00E0] to-blue-500 mt-6">Update Product</button>


            </form>


        </div>
    );
};

export default UpdateProduct;