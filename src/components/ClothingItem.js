import react from 'react';

const ClothingItem = (props) => {

    return (
        <div>
            <h2>I am a clothing item</h2>
            <h2>{console.log(props.item.color)}</h2>
        </div>
    )
}

export default ClothingItem