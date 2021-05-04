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

  addToCart = (e) => {
    const itemID = e.target.parentElement.children[0].id;
    console.log(itemID);

    console.log(this.state.allClothes.find(item => item.id == itemID));
    // console.log(clickedItem);
    // this.setState({
    //   cartContents: [...this.state.cartContents, item]
    // })
    // console.log(this.state.cartContents)
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar funds={this.state.currentFunds} />
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
