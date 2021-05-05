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
    currentFunds: 300
  }

  //INITIAL FETCH: puts all the db.json clothing objects into the state's allClothes array, and the first five objects into the displayClothes array
  componentDidMount() {
    fetch('http://localhost:3001/clothes')
    .then(resp => resp.json())
    .then(data => {
      const allClothes = data.map(item => {
        return {...item, inCart: false, bought: false };
      });
      allClothes.reverse(); //so the latest added items can be displayed at the front
      this.setState({
        allClothes: allClothes,
        displayClothes: allClothes.slice(0,5)
      })
    });
  }
  
  //function to handle sliding items over when someone adds an item to the cart
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

  //function for the "add to cart" button in the UnboughtItem component
  addToCart = (e) => {
    const clickedItem = this.state.allClothes.find(item => item.id == e.target.parentElement.children[0].id);
    let clickedItemMessage = e.target.parentElement.children[2];
    if (e.target.parentElement.id > 50) {
      clickedItemMessage.innerText = "You can't add your own item to your cart!";
      setTimeout(() => clickedItemMessage.innerText="", 2000);
    }
    else {
      clickedItemMessage.innerText = "Added To Cart!";
      window.setTimeout(() => this.moveDisplay(clickedItem, clickedItemMessage), 500);
      clickedItem.inCart = true;
      this.setState({
        allClothes: [...this.state.allClothes]
      })
    }
  }
  //function for the "not interested" button in the UnboughtItem component
  notInterested = (e) => {
    const clickedItem = this.state.allClothes.find(item => item.id == e.target.parentElement.children[0].id);
    let clickedItemMessage = e.target.parentElement.children[2];
      clickedItemMessage.innerText = "We won't show you this again.";
      window.setTimeout(() => {
        clickedItemMessage.innerText = '';
        const newClothes = this.state.allClothes.filter(item => item != clickedItem);
        this.setState({
          allClothes: newClothes,
          displayClothes: newClothes.slice(0,5)
        })
      }, 700);
  }

  //function for the "remove from cart" button in the CartItem component
  removeFromCart = (e) => {
    const clickedItem = this.state.allClothes.find(item => item.id == e.target.parentElement.children[0].id);
    clickedItem.inCart = false;
    this.setState({
      allClothes: [...this.state.allClothes]
    })
  }

  //function for the "checkout" button in the Cart Component
  checkoutCart = (e) => {
    const thanks = e.target.parentElement.parentElement.children[2];
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
      thanks.innerText = "Thanks for checking out! Check your closet to see your new items.";
      setTimeout(() => thanks.innerText = "", 5000);

    }
    else {
      e.target.parentElement.children[2].innerText = "Sorry, but your funds are insufficient. Remove a few items and try again!";
      setTimeout(() => e.target.parentElement.children[2].innerText = "", 3000);
    }
  }

  //function for submit button in the ClothingForm component. Makes a POST request!
  addItem = (e) => {
    e.preventDefault();
    const formContents = Array.from(e.target.children);
    const color = formContents[3].value;
    const description = formContents[1].value;
    const price = formContents[5].value;
    const category = formContents[7][formContents[7].selectedIndex].value;
    let image;
    switch(category) {
      case "Shirts":
        image = "./img/shirt.png";
        break;
      case "Pants":
        image = './img/pants.png';
        break;
      case "Shoes":
        image = "./img/shoes.png";
        break;
      case "Accessories":
        image = './img/hat.png';
    }

    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        category: category,
        img_url: image,
        price: price,
        color: color,
        description: description
      })
    }

    fetch('http://localhost:3001/clothes', configObject)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      const newDisplay = [...this.state.displayClothes];
      newDisplay.unshift(data);
      newDisplay.pop();
      console.log(newDisplay);
      this.setState({
        displayClothes: newDisplay,
      })
    })
    .then(() => {
      formContents[8].innerText = "Thank you for adding an item to the ClothesLine!";
      setTimeout(() => formContents[8].innerText = "", 2000);
    });
  }

  returnItem = (e) => {
    console.log(e.target.parentElement);
    const itemToReturn = this.state.allClothes.find(item => item.id == e.target.parentElement.id);
    console.log(itemToReturn);
  }


  //RENDERING AND ROUTES
  render() {
    return (
      <Router>
        <div>

          <NavBar 
          closetItems={this.state.allClothes.filter(item => item.bought).length} 
          cartItems={this.state.allClothes.filter(item => item.inCart).length} 
          funds={this.state.currentFunds} />

          <Route exact path="/" render={(props) => (
            <ClothesOnLine {...props} clothes={this.state.displayClothes} addToCart={this.addToCart} notInterested={this.notInterested}/>
          )}/>

          <Route exact path="/cart" render={(props) => (
            <Cart {...props} removeFromCart={this.removeFromCart} checkoutCart={this.checkoutCart} clothes={this.state.allClothes} />
          )}/>

          <Route exact path="/sell" render={(props) => (
            <ClothingForm {...props} addItem={this.addItem} />
          )}/>
          
          <Route exact path="/closet" render={(props) => (
            <Closet {...props} returnItem={this.returnItem} clothes={this.state.allClothes} />
          )}/>
          
        </div>
      </Router>
      
    );
  }
  
}

export default App;
