import react from 'react';

const ClothingItem = (props) => {

    const item = props.item;

    const handleClick = (e) => {
        const clothingToAdd = e.target.parentNode;
        props.addToCart(clothingToAdd);
    }

    return (
        <div className="entire-item">
            <div className="clip"></div>
            <div className="clothing-item">
                <div>
                    <img className="clothing-pic" src={item.img_url} alt="clothing" />
                    <p className="clothing-category">{item.category}</p>
                </div>
                <h3>{item.color} {item.description}</h3>
                <p>${item.price}</p>
                <button onClick={handleClick}>Add To Cart</button>
                <br></br>
                <br></br>
                <button>Not Interested</button>
            </div>
        </div>
    )
}

export default ClothingItem