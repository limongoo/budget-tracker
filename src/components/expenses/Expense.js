import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateExpense, removeExpense } from './actions';
import ExpenseForm from './ExpenseForm';

class Expense extends Component {
  
  state = {
    editing: false
  };

  handleEdit = expense => {
    this.props.updateExpense(expense);
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };
  
  render() {
    const { id, expense, price, categoryId, removeExpense, timestamp } = this.props;
    const { editing } = this.state;

    return (
      <li className="expense-li">
        <div>
          {editing ? 
            <ExpenseForm id={id} text={expense} onEdit={this.handleEdit}/> :
            <p>{expense} - {price}<br/>
              <time>{timestamp.toLocaleString()}</time>
            </p>
          }
          <div className="buttons">
            <button onClick={this.handleToggleEdit}>
              {editing ? 'cancel' : '✎'}
            </button>
            <button onClick={() => removeExpense(id)}>✖</button>
          </div>
        </div>
        <div>
          <div>
            <button className="note-remove" onClick={() => removeExpense(id, categoryId)}>✖</button>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { updateExpense, removeExpense }
)(Expense);