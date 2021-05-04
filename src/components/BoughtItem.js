import react from 'react';
import ItemInfo from './ItemInfo'

const BoughtItem = (props) => {

    const item = props.item;

    return (
        <div id={item.id} className="bought-item">
            <ItemInfo bought={true} item={props.item} />
        </div>
    )
}

export default BoughtItem