import React from 'react';
import ClothingItem from '../components/ClothingItem';

const ClothingContainer = (props) => {
    return (
        <div className="clothing-container">
            {props.clothes.map(theItem => <ClothingItem item={theItem} addToCart={props.addToCart} /> )}
        </div>
    )
}

export default ClothingContainer;