import './App.css';
import ClothesOnLine from './containers/ClothesOnLine';
import Closet from './containers/Closet';
import ClothingForm from './components/ClothingForm';
import Cart from './containers/Cart';
import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {

  state = {
    allClothes: [],
    displayClothes: [],
    currentFunds: 200
  }

  componentDidMount() {
    fetch('http://localhost:3001/clothes')
    .then(resp => resp.json())
    .then(data => {
      const allClothes = data.map(item => {
        return {...item, inCart: false, bought: false };
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

  checkoutCart = (e) => {
    const itemsToCheckout = Array.from(e.target.parentElement.parentElement.children[1].children);
    let subtotal = 0;
    itemsToCheckout.forEach(item => {
      const checkoutItem = this.state.allClothes.find(clothingItem => clothingItem.id == item.id);
      subtotal = subtotal + checkoutItem.price;
    })
    if (this.state.currentFunds >= subtotal) {
      itemsToCheckout.forEach(item => {
        const checkoutItem = this.state.allClothes.find(clothingItem => clothingItem.id == item.id);
        checkoutItem.bought = true;
        checkoutItem.inCart = false;
      })
      const newFunds = this.state.currentFunds - subtotal;
      this.setState({
        allClothes: [...this.state.allClothes],
        currentFunds: newFunds
      })
      // e.target.parentElement.parentElement.children[1].innerHTML = "Thank you for checking out! Check your closet to find your new items.";
      // setTimeout(e.target.parentElement.parentElement.children[1].innerHTML = "Cart is empty!", 2000);
    }
    else {
      e.target.parentElement.children[2].innerText = "Sorry, but your funds are insufficient. Remove a few items and try again!";
      setTimeout(() => e.target.parentElement.children[2].innerText = "", 3000);
    }
  }

  removeFromCart = (e) => {
    const clickedItem = this.state.allClothes.find(item => item.id == e.target.parentElement.children[0].id);
    clickedItem.inCart = false;
    this.setState({
      allClothes: [...this.state.allClothes]
    })
  }

  addToCart = (e) => {
    const clickedItem = this.state.allClothes.find(item => item.id == e.target.parentElement.children[0].id);
    const clickedItemMessage = e.target.parentElement.children[2];
    clickedItemMessage.innerText = "Added To Cart!";
    window.setTimeout(() => this.moveDisplay(clickedItem, clickedItemMessage), 500);
    clickedItem.inCart = true;
    this.setState({
      allClothes: [...this.state.allClothes]
    })
    
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar 
          closetItems={this.state.allClothes.filter(item => item.bought).length} 
          cartItems={this.state.allClothes.filter(item => item.inCart).length} 
          funds={this.state.currentFunds} />

          <Route exact path="/" render={(props) => (
            <ClothesOnLine {...props} clothes={this.state.displayClothes} addToCart={this.addToCart}/>
          )}
          />
          <Route exact path="/cart" render={(props) => (
            <Cart {...props} removeFromCart={this.removeFromCart} checkoutCart={this.checkoutCart} clothes={this.state.allClothes} />
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
