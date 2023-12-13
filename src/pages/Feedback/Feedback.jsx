import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Feedback = () => {
    const comments = useLoaderData()

    // const { _id, name, type, price, date, comment, currentTime, userName, commenterImg, photo } = comments;


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
                                        <button className="btn btn-ghost btn-outline btn-xs">Report</button>
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