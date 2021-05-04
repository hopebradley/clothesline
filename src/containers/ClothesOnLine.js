import React from 'react';
import ClothingContainer from './ClothingContainer';

const ClothesOnLine = (props) => {
    return (
        <div>
            <div className="line"></div>
            <ClothingContainer clothes={props.clothes} />
        </div>
    )
}

export default ClothesOnLine;