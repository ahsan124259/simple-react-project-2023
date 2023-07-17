import React from 'react';
import './product.css';

const Product = (props) => {
const {product,handleAddToCard}=props;
const {img,name,ratings,seller}=product;

    


    return (
        <div className='product'>
           <img src={img} alt=""  />
           <div>
            <p>Name:{name}</p>
            <p><small>seller:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>
           </div>
           <button onClick={()=>handleAddToCard(product)} className='button '>
            AddToCard
            </button>
        </div>
    );
};

export default Product;