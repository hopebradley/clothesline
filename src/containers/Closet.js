import React from 'react';
import BoughtItem from '../components/BoughtItem';

const Closet = (props) => {

    const closetItems = props.clothes.filter(item => item.bought);
    const hasClothes = closetItems.length > 0;

    renderClothes = () => {
        if(hasClothes) {
            closetItems.map(item => {
                return <BoughtItem returnItem={props.returnItem} item={item}/>
            })
            closetItems.map(item => {
                return <Route path=`/closet/return/${item.id}` render={(props) => (
                    <Closet {...props}  clothes={this.state.allClothes} />
                  )}/>
            })
        }
    }

    return (
        <div className="closet">
            <h1>Welcome to your closet!</h1>
            <div>
                
            </div>
        </div>
    )
}

export default Closet;