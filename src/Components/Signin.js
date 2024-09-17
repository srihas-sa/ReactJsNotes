import {Component} from 'react';

export class Signin extends Component {
  state = {
    current : true
  }
  render() { 
    return (
      <div>
        <label for="username">UserName</label>
  <input type="text" placeholder="name" id="username" />
  <label for="Password">Password</label>
  <input type="text" placeholder="Password" id="Password" />
        </div>
    )
  }
}

