import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

render() {


    return (
      <div className="app">
        
        <header role="banner" id="header">
          <h1>Budget Tracker</h1>
          
        </header>

        <main role="main" id="main">
          <p>main content</p>
        </main>

        <footer role="contentinfo" id="footer">
          <p>(c) Budget Tracker App</p>
        </footer>

      </div>
    );
  }
}