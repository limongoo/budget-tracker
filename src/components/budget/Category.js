import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCategory, removeCategory } from './actions';
import CategoryForm from '../common/CategoryForm';
import Comments from '../comments/Comments';

class Category extends Component {

  state = {
    editing: false
  };

  handleEdit = category => {
    this.props.updateCategory(category);
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    const { id, timestamp, text, removeCategory } = this.props;
    const { editing } = this.state;

    return (
      <li className="category-li">
        <div>
          {editing ? 
            <CategoryForm id={id} text={text} onEdit={this.handleEdit}/> :
            <p><span className="category-title">{text}</span> <br/><time>Created on: {timestamp.toLocaleString()}</time></p>
          }
          <Comments categoryId={id}/>
        </div>
        <div className="buttons">
          <button onClick={this.handleToggleEdit}>
            {editing ? 'cancel' : '✎'}
          </button>
          <button onClick={() => removeCategory(id)}>✖</button>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { updateCategory, removeCategory }
)(Category);

