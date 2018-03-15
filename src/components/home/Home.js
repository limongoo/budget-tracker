import React, { PureComponent } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


export default class Home extends PureComponent {

  render() {

    return (
      <div>
        <h1>Welcome to Budget Tracker</h1>
        <p><Link to="/auth/signin">Please Sign In</Link></p>
      </div>
    );
  }
}