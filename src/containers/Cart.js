import React from 'react';
import ClothingItem from '../components/ClothingItem';

const Cart = (props) => {
    return (
        <div className="cart">
            <h1>I am the cart</h1>
            {/* {props.cartContents.map(item => {
                return "Theres a new Cart item now";
            })} */}
        </div>
    )
}

export default Cart;