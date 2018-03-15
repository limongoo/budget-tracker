import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Categories from './budget/Categories';
import './App.css';
import { Signin, Signup } from './Auth';
import { listenForUser, logout } from './actions';
import PrivateRoute from './PrivateRoute';
import Home from './home/Home';

class App extends PureComponent {

  componentDidMount() {
    this.props.listenForUser();
  }

  render() {
    const { user, logout } = this.props;

    return (
      <Router>
        <Fragment>
            
          <div className="app">

            <header role="banner" id="header">
              <section className="head-container maxwidth-wrap">
                <h1 className="logo">Budget Tracker</h1>
                <nav>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    { user 
                      ? <li><Link to="/" onClick={logout}>Log out</Link></li>
                      : 
                      <div>
                        <li><Link to="/auth/signin">Sign In</Link></li>
                        <li><Link to="/auth/signup">Sign Up</Link></li>
                      </div>
                    }
                  </ul>
                </nav>
              </section>
            </header>

            <main role="main" id="main">
              <section className="main-container maxwidth-wrap">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <PrivateRoute exact path="/dashboard" component={Categories}/>
                  <Route exact path="/auth/signin" component={Signin}/>
                  <Route exact path="/auth/signup" component={Signup}/>
                  <Redirect to="/"/>
                </Switch>
              </section>
            </main>

            <footer role="contentinfo" id="footer">
              <section className="footer maxwidth-wrap"> 
                <p>(c) <a href="https://github.com/limongoo/budget-tracker/tree/dev" target="_blank" rel="author noopener noreferrer">Budget Tracker App</a></p>
                <p>Created by: <a href="https://github.com/pereztjacob" target="_blank" rel="author noopener noreferrer">Jacob</a> | <a href="https://github.com/lomax715" target="_blank" rel="author noopener noreferrer">Jack</a> | <a href="https://github.com/limongoo" target="_blank" rel="author noopener noreferrer">Ivan</a></p>
              </section>
            </footer>
        
          </div>

        </Fragment>
      </Router>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { listenForUser, logout }
)(App);