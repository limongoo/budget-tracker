import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from './actions';
import CategoryForm from '../common/CategoryForm';
import Comment from './Comment';
import './Comment.css';

class Comments extends Component {

  handleAdd = comment => {
    const { addComment, categoryId } = this.props;
    addComment(categoryId, comment);
  };

  render() {
    const { comments } = this.props;
    return (
      <section>
        <CategoryForm onEdit={this.handleAdd}/>
        <ul className="comment-ul">
          {comments.map(comment => (
            <Comment key={comment.id} {...comment}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(
  ({ commentsByCategory }) => ({ commentsByCategory }),
  { addComment },
  ({ commentsByCategory }, { addComment }, { categoryId }) => {
    return {
      comments: commentsByCategory[categoryId],
      addComment,
      categoryId
    };
  }
)(Comments);