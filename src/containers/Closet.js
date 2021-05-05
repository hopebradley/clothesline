import React from 'react';
import BoughtItem from '../components/BoughtItem';
import ReturnItem from '../components/ReturnItem';



const Closet = (props) => {

    const closetItems = props.clothes.filter(item => item.bought);

    const renderItems = closetItems.map(item => {
        return <BoughtItem item={item} />
    });

    return (
        <div className="closet">
            <h1>Welcome to your closet!</h1>
            <div>
                {closetItems.length > 0 ? renderItems : <h2>...it's empty.</h2>}
            </div>
        </div>
    )
}

export default Closet;