import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])
    const addedProduct = (product) => {
        const existsProduct = cart.find(shirt => shirt._id === product._id);
        if (existsProduct) {
            alert('you already buy this product')
        }
        else {
            const newCart = [...cart, product];
            setCart(newCart)
        }
    }
    const removeFromCart =(removeProduct)=>{
        const removeItem = cart.filter(item => item._id !== removeProduct._id);
        setCart(removeItem)
    }
    return (
        <div className='product-cart-area'>
            <div className="product-container">
                <div className="products">
                    {
                        tshirts.map(tshirt => <Tshirt
                            key={tshirt._id}
                            tshirt={tshirt}
                            addedProduct={addedProduct}
                        ></Tshirt>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                removeFromCart = {removeFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;