import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ brand }) => {
    const { id, brandName, brandImage } = brand;
    return (
        <div>
            {/* to='/brand' */}
            <Link to='/brand'>
                <div className="card ">
                    <figure><img className='w-[350px]' src={brandImage} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">{brandName}</h2>

                    </div>
                </div>

            </Link>
        </div>
    );
};

export default Category;