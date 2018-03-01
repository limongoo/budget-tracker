import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComment } from './actions';

class Comment extends Component {
  render() {
    const { id, text, categoryId, removeComment } = this.props;

    return (
      <li>
        {text}
        <button className="note-remove" onClick={() => removeComment(id, categoryId)}>✖</button>
      </li>
    );
  }
}

export default connect(
  null,
  { removeComment }
)(Comment);