import React from 'react';
import ClothingItem from '../components/ClothingItem';

const ClothingContainer = (props) => {
    return (
        <div>
            {props.allClothes.map(item => {
                console.log(item);
                return <ClothingItem item={item} />
            })};
        </div>
    )
}

export default ClothingContainer;