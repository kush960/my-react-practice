import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      mosters: [
         {
          name: 'ankit',
         },
         {
          name: 'susu',
         },
         {
          name: 'popo',
         },
         {
          name: 'chowmine',
         }
      ], 
    };
  }

  render (){
    return (
      <div className="App">
        {this.state.mosters.map((moster) => {
          return <h1>{moster.name}</h1>
        })}
      </div>
    );
  }
  
}

export default App;
