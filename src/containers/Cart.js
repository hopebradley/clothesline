import React from 'react';
import ItemInfo from '../components/ItemInfo';

const Cart = (props) => {
    return (
        <div className="cart">
            <h1>I am the cart</h1>
            {props.clothes.filter(item => item.bought).map(item => {
                return <ItemInfo item={item}/> ;
            })}
        </div>
    )
}

export default Cart;