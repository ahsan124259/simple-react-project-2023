import React from 'react';
import './cart.css';

const Cart = ({cart}) => {
    
    let total=0;
    let shipping=0;
    for(const product of cart){
       
        total=total+product.price ;
        shipping=  shipping+product.shipping;
    }
    const tax=parseFloat(total*.10).toFixed(2);
    const grandTotalString=(total+shipping+tax);
    const grandTotal=parseFloat(grandTotalString);

    return (
        <div className='cart'>
             <h1>Order-list:{cart.length} </h1>
             <p>Price:{total}</p>
             <p>Shipping:{shipping}</p>
             <p>Tax:{tax}</p>
             <p>GrandTotal:{grandTotal}</p>
             
        </div>
    );
};

export default Cart;