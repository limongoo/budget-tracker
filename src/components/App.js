import React, { Component } from 'react';
import Categories from './budget/Categories';
import './App.css';

export default class App extends Component {

  render() {

    return (
      <div className="app">
        
        <header role="banner" id="header">
          <section className="head-container maxwidth-wrap">
            <h1 className="logo">Budget Tracker</h1>
            <nav>
              <ul>
                <li><a href="#">Dashboard</a></li>
              </ul>
            </nav>
          </section>
          
        </header>

        <main role="main" id="main">
          <section className="maxwidth-wrap">
            <Categories/>
          </section>
        </main>

        <footer role="contentinfo" id="footer">
          <section className="footer maxwidth-wrap"> 
            <p>(c) Budget Tracker App</p>
          </section>
        </footer>

      </div>
    );
  }
}