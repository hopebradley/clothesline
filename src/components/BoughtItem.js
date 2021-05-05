import react from 'react';
import ItemInfo from './ItemInfo'
import ReturnItem from './ReturnItem';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const BoughtItem = (props) => {

    const item = props.item;

    return (
        <div>
            <div id={item.id} className="bought-item">
                <ItemInfo bought={true} item={props.item} />
                <Link key={item.id} to={`/closet/${item.id}`}>Return Item</Link> 
            </div>
         </div>
    )
}

export default BoughtItem;