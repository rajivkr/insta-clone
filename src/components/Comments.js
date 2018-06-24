import React, { Component } from 'react';

class Comments extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { postId, addComment } = this.props;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    addComment(postId, author, comment);
    this.refs.commentForm.reset();
  };

  handleDelete = index => {
    const { postId, removeComment } = this.props;
    removeComment(postId, index);
  };

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={() => this.handleDelete(i)}
          >
            &times;
          </button>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, index) =>
          this.renderComment(comment, index)
        )}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="Author" />
          <input type="text" ref="comment" placeholder="Comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
