import React from 'react';
import BoughtItem from '../components/BoughtItem';

const Cart = (props) => {

    const priceArray = props.clothes.filter(item => item.bought).map(item => item.price);
    let total;
    priceArray[0] ? total = priceArray.reduce((price, acc) => price + acc) : total = 0;
    return (
        <div className="cart">
            <div id="checkout-button">
               <h2>Cart Total: ${total ? total : "0"}</h2>
               <button >CHECK OUT</button>
            </div>
            <h1>CART:</h1>
            {props.clothes.filter(item => item.bought).map(item => {
                return <BoughtItem item={item}/> ;
            })}

            
        </div>
    )
}

export default Cart;