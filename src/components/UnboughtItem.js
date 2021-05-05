import react from 'react';
import ItemInfo from './ItemInfo'

const UnboughtItem = (props) => {

    const item = props.item;

    return (
        <div id={item.id} className="entire-item">
            <ItemInfo item={props.item} />
            <button onClick={props.addToCart}>Add To Cart</button>
            <p id="cart-message"></p>
            <button onClick={props.notInterested}>Not Interested</button>
        </div>
    )
}

export default UnboughtItem;