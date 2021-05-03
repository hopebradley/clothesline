import './App.css';
import ClothingItem from './components/ClothingItem';
import ClothingContainer from './containers/ClothingContainer';
import Cart from './containers/Cart';
import React from 'react';


class App extends React.Component {

  state = {
    allClothes: [],
    currentClothes: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/clothes')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      this.setState({
        allClothes: data
      })
    })
  }

  render() {
    return (
      <div>
        <ClothingItem />
        <ClothingContainer allClothes={this.state.allClothes} />
        <Cart />
      </div>
    );
  }
  
}

export default App;
