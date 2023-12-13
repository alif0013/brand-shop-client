import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Feedback = () => {
    const { user } = useContext(AuthContext);
    const comments = useLoaderData()

    // const { _id, name, type, price, date, comment, currentTime, userName, commenterImg, photo } = comments;
    const handleRport = e => {

        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;

        const userName = user?.displayName;
        const commenterImg = user?.photoURL;
        const currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' });

        // Get the current date and format it as "YYYY-MM-DD"
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const date = new Date().toLocaleDateString('en-US', options);

        const newReport = { comment, commenterImg, userName, currentTime, date };

        // console.log(newComment);

        // send data to the server
        fetch('https://brand-shop-server-nine-tau.vercel.app/Report', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReport)

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
        <div className='mb-56'>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Product</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Comment</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            comments.map(comment => <>
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={comment.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{comment.name}</div>
                                                <div className="text-sm opacity-50">{comment.type}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {comment.userName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{comment.date}</span>
                                    </td>
                                    <td>{comment.currentTime}</td>
                                    <td>{comment.comment}</td>
                                    <th>
                                        {/* <button className="btn btn-ghost btn-outline btn-xs">Report</button> */}

                                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Report</button>
                                        <dialog id="my_modal_3" className="modal">
                                            <div className="modal-box">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <form onSubmit={handleRport} method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <input type="text" name="comment" placeholder="Wright a comment..."
                                                        className="input input-bordered  input-primary " required />

                                                    <button type='submit' className="btn ml-10">Submit</button>

                                                </form>
                                            </div>
                                        </dialog>
                                    </th>

                                </tr>
                            </>)
                        }




                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default Feedback;