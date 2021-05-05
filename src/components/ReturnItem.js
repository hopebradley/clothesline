import react from 'react';
import ItemInfo from './ItemInfo';
import { Route } from 'react-router-dom';

const ReturnItem = (props) => {

    return (
        <h1>I am an item and my name is {props.item.color}</h1>
    )
}

export default ReturnItem;