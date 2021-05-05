import React, { isValidElement } from 'react';
import ItemInfo from './ItemInfo';
import { Link } from 'react-router-dom';

const ReturnItem = (props) => {

  const { id }= props.match.params;
  const clothes = props.clothes;
  const item = clothes.find(item => item.id == id);
  console.log(item);

  console.log(id);
    return(
        <div id={id} className="return-item">
            <h2>Return item?</h2>
            <ItemInfo item={item} />
            <button onClick={props.returnItem}>Return Item</button>
            <br></br>
            <h3></h3>
            <br></br>
            <Link to={`/closet`}>Back To Closet</Link> 
        </div>
    )
}

export default ReturnItem;