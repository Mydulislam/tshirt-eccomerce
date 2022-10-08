import React from 'react';

const Cart = ({cart, removeFromCart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Total Product: {cart.length}</h3>
            {
                cart.map(productName=> <p key={productName._id}>
                    {productName.name}
                    <button onClick={()=>removeFromCart(productName)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;