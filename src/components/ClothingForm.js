import react from 'react';

const ClothingForm = (props) => {

    return (
        <div>
            <h1 id="form-title">Add your own item to the ClothesLine:</h1>
            <form onSubmit={props.addItem} className="form">
                <h3>Description</h3>
                <input type="text" placeholder="Soft Long-Sleeve Tee"></input>
                <h3>Color</h3>
                <input type="text" placeholder="Red"></input>
                <h3>Price (dollars)</h3>
                $ <input type="text" placeholder="50"></input>
                <h3>Category</h3>
                <select>
                    <option>Shirts</option>
                    <option>Pants</option>
                    <option>Shoes</option>
                    <option>Accessories</option>
                </select>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default ClothingForm;