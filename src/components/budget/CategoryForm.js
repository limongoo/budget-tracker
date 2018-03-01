import React, { Component } from 'react';
import './Category.css';

export default class CategoryForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });

    this.setState({ text: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, text } = this.state;
    return (
      <form onSubmit = {this.handleSubmit} className="add-category">
        <input required name="text" value={text}  onChange={this.handleChange} placeholder="Category"/>
        <button type="submit">{ id ? 'Update' : 'Add' }</button>
      </form>
    );
  }
}