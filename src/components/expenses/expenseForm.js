import React, { Component } from 'react';
import '../budget/Category.css';

export default class expenseForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expense: '',
      price: '',
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });
    this.setState({ expense: '', price: '' });
    // console.log(this.state);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, expense, price } = this.state;
    return (
      <div>
        <form onSubmit = {this.handleSubmit} className="add-category">
          <label htmlFor="expense">
            <input required id="expense" name="expense" value={expense} onChange={this.handleChange} placeholder="ex: Expense"/>
            <input required id="expense" name="price" value={price} onChange={this.handleChange} placeholder="ex: Price"/>
          </label>
          <button type="submit">{ id ? 'Update Expense' : 'Add' }</button>
        </form>
      </div>
    );
  }
}