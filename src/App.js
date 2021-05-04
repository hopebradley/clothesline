import './App.css';
import ClothesOnLine from './containers/ClothesOnLine';
import ClothingContainer from './containers/ClothingContainer'
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
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={(props) => (
            <ClothesOnLine {...props} clothes={this.state.currentClothes} />
          )}
          />
          <Route exact path="/all-clothes" render={(props) => (
            <ClothingContainer {...props} clothes={this.state.allClothes} />
          )}
          />
          <Route exact path="/cart" render={(props) => (
            <Cart {...props} cartContents={this.state.cartContents} />
          )}
          />
        </div>
      </Router>
      
    );
  }
  
}

export default App;
