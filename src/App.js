import React, { Component } from 'react';
import User from './components/user';
import './App.css';

class App extends Component {
  constructor (){ 
    super();
    this.state = {  
    users: [
      {id:"fsjfl", name:"David", age:50},
      {id:"kljff", name:"Jeremiah", age:60},
      {id:"ghjkl", name:"Paul", age:70}
      ]
  }
  }
  
  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index,1);
    this.setState({users:users})
  }

  render() {
    return (
      <div className="App"> 
        <ul>
        {
          this.state.users.map((user, index) => {
          return(<User 
                  age={user.age}
                  key={user.id}
                  delEvent={this.deleteUser.bind(this, index)}
                  >{user.name}</User>)
          })
        }
        
        </ul>
      
      </div>
    );
  }
}

export default App;
