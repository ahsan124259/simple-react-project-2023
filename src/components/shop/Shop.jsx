import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    
    useEffect(()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCard=(product)=>{
        console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
    }
   
    
    return (
        <div className='shop'>
            <div className="shop-container">
            
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                handleAddToCard={handleAddToCard}

                ></Product>)
            }


            </div>
            <div className="order-container">
            <Cart cart={cart}></Cart>
           
            </div>
        </div>
    );
};

export default Shop;