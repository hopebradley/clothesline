import react from 'react';
import ItemInfo from './ItemInfo'
import { Link, Route } from 'react-router-dom';
import ReturnItem from './ReturnItem';

const BoughtItem = (props) => {

    const item = props.item;

    return (
        <div>
            <Route exact path={`/closet/return/${item.id}`} render={(props) => (
            <ReturnItem {...props} item={item} />
          )}/>
            <div id={item.id} className="bought-item">
                <ItemInfo bought={true} item={props.item} />
                <Link to={`/closet/return/${item.id}`}>Return Item</Link>
            </div>
        </div>
    )
}

export default BoughtItem