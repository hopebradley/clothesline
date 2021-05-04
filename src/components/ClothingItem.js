import react from 'react';
import ItemInfo from './ItemInfo'

const ClothingItem = (props) => {

    const item = props.item;

    const handleClick = (e) => {
        const clothingToAdd = e.target.parentNode;
        props.addToCart(clothingToAdd);
    }

    return (
        <div className="entire-item">
            <ItemInfo item={props.item} />
            <button onClick={handleClick}>Add To Cart</button>
            <br></br>
            <br></br>
            <button>Not Interested</button>
        </div>
    )
}

export default ClothingItem