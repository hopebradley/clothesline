import react from 'react';
import ItemInfo from './ItemInfo'

const UnboughtItem = (props) => {

    const item = props.item;

    return (
        <div id={item.id} className="entire-item">
            <ItemInfo item={props.item} />
            <button onClick={props.addToCart}>Add To Cart</button>
            <br></br>
            <p id="cart-message"></p>
            <br></br>
            <button>Not Interested</button>
        </div>
    )
}

export default UnboughtItem