import react from 'react';
import ItemInfo from './ItemInfo'

const CartItem = (props) => {

    const item = props.item;

    return (
        <div id={item.id} className="cart-item">
            <ItemInfo item={props.item} />
            <button onClick={props.removeFromCart}>Remove From Cart</button>
        </div>
    )
}

export default CartItem