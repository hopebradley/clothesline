import react from 'react';
import ItemInfo from './ItemInfo'

const BoughtItem = (props) => {

    const item = props.item;

    return (
        <div className="entire-item">
            <ItemInfo item={props.item} />
        </div>
    )
}

export default BoughtItem