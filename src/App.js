import './App.css';
import ClothesOnLine from './containers/ClothesOnLine';
import Closet from './containers/Closet';
import ClothingForm from './components/ClothingForm';
import Cart from './containers/Cart';
import React from 'react';
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends React.Component {

  state = {
    allClothes: [],
    displayClothes: [],
    currentFunds: 800
  }

  componentDidMount() {
    fetch('http://localhost:3001/clothes')
    .then(resp => resp.json())
    .then(data => {
      const allClothes = data.map(item => {
        return {...item, bought: false };
      })
      this.setState({
        allClothes: allClothes,
        displayClothes: allClothes.slice(0,5)
      })
    });
  }

  moveDisplay = (item, clickedItemMessage) => {
    const index = this.state.displayClothes.indexOf(item);
    const newItemIndex = this.state.allClothes.indexOf(this.state.displayClothes[4]) + 1;
    const newDisplay = this.state.displayClothes.filter(theItem => theItem != item);
    newDisplay.push(this.state.allClothes[newItemIndex]);
    this.setState({
      displayClothes: newDisplay
    })
    clickedItemMessage.innerText = '';
  }

  addToCart = (e) => {
    const clickedItem = this.state.allClothes.find(item => item.id == e.target.parentElement.children[0].id);
    console.log(clickedItem);
    const clickedItemMessage = e.target.parentElement.children[3];
    clickedItemMessage.innerText = "Added To Cart!";
    window.setTimeout(() => this.moveDisplay(clickedItem, clickedItemMessage), 1500);
    clickedItem.bought = true;
    this.setState({
      allClothes: [...this.state.allClothes]
    })
    
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar cartItems={this.state.allClothes.filter(item => item.bought).length} funds={this.state.currentFunds} />
          <Route exact path="/" render={(props) => (
            <ClothesOnLine {...props} clothes={this.state.displayClothes} addToCart={this.addToCart}/>
          )}
          />
          <Route exact path="/cart" render={(props) => (
            <Cart {...props} clothes={this.state.allClothes} />
          )}
          />
          <Route exact path="/sell" render={(props) => (
            <ClothingForm {...props}  />
          )}
          />
          <Route exact path="/closet" render={(props) => (
            <Closet {...props} clothes={this.state.allClothes} />
          )}
          />
          
        </div>
      </Router>
      
    );
  }
  
}

export default App;
