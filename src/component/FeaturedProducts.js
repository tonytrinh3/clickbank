import React from 'react';
import productsData from '../data/productsData';
import "./css/FeaturedProducts.css";

function FeaturedProducts(){
    const images = productsData.map((image) =>{
        return  (
            <div className = 'product-image'>
                <a><img className = 'product-image__img' src = {image.img.src} alt= "product images"/></a>
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