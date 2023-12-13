import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const ProductDetails = () => {

    const { user } = useContext(AuthContext);
    const products = useLoaderData()

    const { _id, name, brand, type, price, rating, description, photo } = products;


    const handleAddToCart = () => {
        // send data to the server
        fetch('https://brand-shop-server-oxcuuqsbx-alif0013s-projects.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Product added Successfully!')
                }
            })


    }
    const handleFeadback = e => {

        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;

        const userName = user?.displayName;
        const commenterImg = user?.photoURL;
        const currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' });

        // Get the current date and format it as "YYYY-MM-DD"
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const date = new Date().toLocaleDateString('en-US', options);

        const newComment = { comment, commenterImg, userName, currentTime, date,type, price, photo, name };

        // console.log(newComment);

        // send data to the server
        fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('comment added Successfully!')
                }
            })
       


    }

    return (
        <div className='flex flex-col lg:flex-row'>
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
                       
                        {/* The button to open modal */}
                        <label htmlFor="my_modal_7" className="btn px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">FeedBack</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                                <form onSubmit={handleFeadback}  method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <input type="text" name="comment"  placeholder="Wright a comment..."
                                        className="input input-bordered  input-primary " required />

                                    <button type='submit' className="btn ml-10">Submit</button>
                                  
                                </form>
                              
                            </div>
                            <label type='submit' className="modal-backdrop" htmlFor="my_modal_7"><button type='submit' className="btn ml-10">Submit</button></label>
                        
                        </div>


                        <button onClick={handleAddToCart} className="px-8 mt-5 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>

      
        </div>
    );
};

export default ProductDetails;