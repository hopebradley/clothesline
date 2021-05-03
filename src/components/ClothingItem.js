import react from 'react';

const ClothingItem = (props) => {

    const item = props.item;

    const handleClick = (e) => {
        const clothingToAdd = e.target.parentNode;
        props.addToCart(clothingToAdd);
    }

    return (
        <div className="clothing-item">
            <p>I am a clothing item</p>
            {/* {console.log(item)} */}
            <button onClick={handleClick}>Add To Cart</button>
        </div>
    )
}

export default ClothingItem