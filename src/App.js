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
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => this.setState({shoes: data.results}))
  }

  render(){
    return (
      <div>
        <ul>
        {this.state.shoes.map(s => {
          return (<li>{s.name}</li>)
        })}
        </ul>
      </div>
    );
  }
  
}

export default App;
