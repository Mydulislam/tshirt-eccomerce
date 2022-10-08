import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,addedProduct}) => {
    const{picture, name, price} = tshirt;
    return (
        <div className='tshirt-area'>
            <div className='tshirt-img'>
                <img src={picture} alt="" />
            </div>
            <div className="info">
                <h4>Name: {name}</h4>
                <p>Price: {price}</p>
            </div>
                <button onClick={()=>addedProduct(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;