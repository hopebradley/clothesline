import React from 'react';
import UnboughtItem from '../components/UnboughtItem';

const ClothesOnLine = (props) => {
    return (
        <div>
            <div className="line"></div>
            <div className="clothing-container">
                {props.clothes.map(theItem => <UnboughtItem item={theItem} notInterested={props.notInterested} addToCart={props.addToCart} /> )}
            </div>  
            <p style={{color: "grey", fontSize: "15px", textAlign: "center"}}>Clothes will move across the clothesline as you add items to your cart or remove them from the line.</p>
            
        </div>
    )
}

export default ClothesOnLine;