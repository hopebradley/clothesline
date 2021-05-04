import React from 'react';
import CartItem from '../components/CartItem';

const Cart = (props) => {

    const priceArray = props.clothes.filter(item => item.inCart).map(item => item.price);
    let total;
    priceArray[0] ? total = priceArray.reduce((price, acc) => price + acc) : total = 0;
    const cartItems = props.clothes.filter(item => item.inCart);


    return (
        <div className="cart">
            <div id="checkout-button">
               <h2>Cart Total: ${total ? total : "0"}</h2>
               <button onClick={props.checkoutCart}>CHECK OUT</button>
               <h3 id="insufficient-funds"></h3>
            </div>
            <div>
                {cartItems.length > 0 ? cartItems.map(item => <CartItem removeFromCart={props.removeFromCart} item={item}/>) : <h2>Your cart is empty.</h2>}
            </div>
            <h3 style={{color: "green"}}></h3>  
        </div>
    )
}

export default Cart;