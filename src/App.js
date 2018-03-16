import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()


    this.state = {
      pictureUrl: '',
      name: '',
      friends: [{
        pictureUrl: "",
        name: ""

      }]


    };
  }
  updatePicture(value) {
    this.setState(() => {
      return {
        pictureUrl: value
      }
    })

  }
  updateName(value) {
    this.setState(() => {
      return {
        name: value
      }
    })
  }
  addFriend() {
    console.log(this.state)
    const newFriend = {
      pictureUrl: this.state.pictureUrl,
      name: this.state.name
    };
    const newFriendsList = this.state.friends.slice();
    newFriendsList.push(newFriend);
    this.setState(() => {
      return {
        friends: newFriendsList,
        pictureUrl: '',
        name: ''
      }
    })
  }
  render() {
    return (
      <div>
        Picture:
       <input onChange={event => this.updatePicture(event.target.value)}
       value={this.state.pictureUrl} />

        Name:
       <input onChange={event => this.updateName(event.target.value)} />

        <button onClick={event => this.addFriend()}>Add friends</button>
        <div>
          {
            this.state.friends.map(friend =>
              <div key={friend.name}>
                <img src={friend.pictureUrl} alt=""/>
                Name:{friend.name}
              </div>
            )}
        </div>


        <div>Current state: {JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

export default App;
