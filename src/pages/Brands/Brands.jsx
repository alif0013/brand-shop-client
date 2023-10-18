import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Brands = () => {

    const brands = useLoaderData()
    console.log(brands);


    return (
        <div>
            filter brand{brands.length}
        </div>
    );
};

export default Brands;