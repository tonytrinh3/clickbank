import React from 'react';
import data from '../data/data';
import "./FeaturedProducts.css";

function FeaturedProducts(){
    return(
        <div>
            <h1> Featured Products</h1>
            <br/>
            <img src = {data[0].img.src} alt= "shit"/>
        </div>
    )
};

export default FeaturedProducts;