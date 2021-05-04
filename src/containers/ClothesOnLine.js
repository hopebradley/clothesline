import React from 'react';
import UnboughtItem from '../components/UnboughtItem';

const ClothesOnLine = (props) => {
    return (
        <div>
            <div className="line"></div>
            <div className="clothing-container">
                {props.clothes.map(theItem => <UnboughtItem item={theItem} addToCart={props.addToCart} /> )}
            </div>
        </div>
    )
}

export default ClothesOnLine;