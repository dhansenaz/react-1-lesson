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
updatePicture(value){
  this.setState(() =>{
    return{
      pictureUrl:value
    }
  })

}
updateName(value){
  this.setState(() =>{
    return{
      name:value
    }
  })
}
  render() {
    return (
      <div>
        Picture:
       <input onChange={event => this.updatePicture(event.target.value)}/>

        Name:
       <input onChange={event => this.updateName(event.target.value)}/>

        <button>Add friends</button>

        <div>Current state: {JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

export default App;
