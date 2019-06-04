import React from 'react';
import productsData from '../data/productsData';
import "./FeaturedProducts.css";

function FeaturedProducts(){
    const images = productsData.map((image) =>{
        return  <img src = {image.img.src} alt= "shit"/>
    })

    return(
        <div>
            <h1> Featured Products</h1>
            <br/>
           {images}

        </div>
    )
};

export default FeaturedProducts;