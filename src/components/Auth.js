import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signup, signin } from './actions';

class Credentials extends PureComponent {

  state = {
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { elements } = event.target;
    const { history, location } = this.props;

    const credentials = {
      email: elements.email.value,
      password: elements.password.value
    };

    const { from } = location.state || { from: { pathname: '/' } };
    
    this.props.onSubmit(credentials)
      .then(() => history.push(from))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { error } = this.state;
    const { buttonText } = this.props;

    return (
      <div className="sign-in">
        <form onSubmit={this.handleSubmit} className="add-category">
          <div>
          Email: <input name="email" required placeholder="e@gmail.com"/>
          </div>
          <br/>
          <div>
          Password: <input name="password" required placeholder="abc123"/>
          </div>
          <br/>
          <div>
            <button>{buttonText}</button>
          </div>
          <pre style={{ color: 'red' }}>
            {error && error.message}
          </pre>
        </form>
      </div>
    );
  }
}

export const Signup = connect(
  () => ({ buttonText: 'Create Account' }),
  { onSubmit: signup }
)(Credentials);

export const Signin = connect(
  () => ({ buttonText: 'Log In' }),
  { onSubmit: signin }
)(Credentials);
