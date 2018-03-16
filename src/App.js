import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()


    this.state = {
      pictureUrl: '',
      name: '',
      friends: []


    };
  }
  render() {
    return (
      <div>
        Picture:
       <input />

        Name:
       <input />

        <button>Add friends</button>
      </div>
    );
  }
}

export default App;
