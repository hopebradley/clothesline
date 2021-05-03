import './App.css';
import ClothingItem from './components/ClothingItem';
import ClothingContainer from './containers/ClothingContainer';
import Cart from './containers/Cart';
import React from 'react';
import NavBar from './components/NavBar'


class App extends React.Component {

  state = {
    allClothes: [],
    currentClothes: [],
    cartContents: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/clothes')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      this.setState({
        allClothes: data,
        currentClothes: data.splice(0,5)
      })
    });
  }

  addToCart = (item) => {
    this.setState({
      cartContents: [...this.state.cartContents, item]
    })
    console.log(this.state.cartContents)
  }

  render() {
    return (
      <div>
        <NavBar />
        <ClothingContainer addToCart={this.addToCart} clothes={this.state.currentClothes} />
        <Cart contents={this.state.cartContents}/>
      </div>
    );
  }
  
}

export default App;
