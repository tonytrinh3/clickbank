import React from 'react';
import productsData from '../data/productsData';
import "./FeaturedProducts.css";

function FeaturedProducts(){
    const images = productsData.map((image) =>{
        return  (
            <div className = 'product-image'>
                <a><img src = {image.img.src} alt= "shit"/></a>
            </div>
        )
    })

    return(
        <div>
            <h1 className = "feature-products-title"> Featured Products</h1>
            <br/>

            <div className = 'product-image-container'>
                {images}
            </div>
           
        </div>
    )
};

export default FeaturedProducts;