import react from 'react';

const ItemInfo = (props) => {

    const item = props.item;

    return (
            <div id={item.id} className="clothing-item">
                <div>
                    <img className="clothing-pic" src={item.img_url} alt="clothing" />
                    <p className="clothing-category">{item.category}</p>
                </div>
                <h3>{item.color} {item.description}</h3>
                <p>${item.price}</p>
            </div>
    )
}

export default ItemInfo