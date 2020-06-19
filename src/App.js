import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      shoes: []
    }
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/shoe/')
    .then(res => res.json())
    .then(data => this.setState({shoes: data}))
  }

  render(){
    return (
      <div>
        <h1>The Shoes</h1>
        <ul>
        {this.state.shoes.map(s => {
          return (
            <div>
            <li>Brand: {s.manufacturer}</li>
            <li>Color:  {s.color}</li>
            <li>Fasten Type: {s.fasten_type}</li>
            <li>Material: {s.material}</li>
            <li>Shoe Type: {s.shoe_type}</li>
            <li>Size:  {s.size}</li>
            <br></br>
            </div>)
        })}
        </ul>
      </div>
    );
  }
  
}

export default App;
