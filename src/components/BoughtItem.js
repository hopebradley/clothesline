import react from 'react';
import ItemInfo from './ItemInfo'

const BoughtItem = (props) => {

    const item = props.item;

    return (
        <div id={item.id} className="bought-item">
            <ItemInfo bought={true} item={props.item} />
            <button onClick={props.returnItem}>Return Item</button>
        </div>
    )
}

export default BoughtItem