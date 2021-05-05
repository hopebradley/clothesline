import React from 'react';
import BoughtItem from '../components/BoughtItem';

const Closet = (props) => {

    const closetItems = props.clothes.filter(item => item.bought);

    return (
        <div className="closet">
            <h1>Welcome to your closet!</h1>
            <div>
                {closetItems.length > 0 ? closetItems.map(item => <BoughtItem item={item}/>) : <h2>...it's empty.</h2>}
            </div>
        </div>
    )
}

export default Closet;