import React from 'react';
import ClothingItem from '../components/ClothingItem';

const ClothingContainer = (props) => {
    return (
        <div className="clothing-container">
            <div className="line"></div>
            {props.clothes.map(theItem => <ClothingItem item={theItem} addToCart={props.addToCart} /> )}
        </div>
    )
}

export default ClothingContainer;