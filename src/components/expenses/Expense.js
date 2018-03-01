import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './actions';

class Expense extends Component {
  render() {
    const { id, text, categoryId, removeExpense } = this.props;

    return (
      <li>
        {text}
        <button className="note-remove" onClick={() => removeExpense(id, categoryId)}>✖</button>
      </li>
    );
  }
}

export default connect(
  null,
  { removeExpense }
)(Expense);