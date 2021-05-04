import react from 'react';
import ItemInfo from './ItemInfo'

const BoughtItem = (props) => {

    const item = props.item;

    return (
        <div className="cart-item">
            <ItemInfo item={props.item} />
            <button>Remove From Cart</button>
        </div>
    )
}

export default BoughtItem