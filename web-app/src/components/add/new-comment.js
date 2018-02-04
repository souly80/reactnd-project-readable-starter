import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as API from '../../services/api-helper';
import {ADD_COMMENT, EDIT_COMMENT} from "../../actions/types";
import {addComment, editComment} from "../../actions/comments";
import {Link} from "react-router-dom";

class NewComment extends Component {

  initialState = {
    author: '',
    body: '',
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {originalComment} = this.props;
    if (originalComment) {
      this.setState({author: originalComment.author, body: originalComment.body});
    }
  }

  getFormValidationState() {
    const {author, body} = this.state;
    return (author < 1 || body < 1);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.getFormValidationState())
      return;
    const {originalComment} = this.props;
    if (originalComment) {
      this.editComment();
    } else {
      this.createComment();
    }
    const {onSubmit} = this.props;
    if (onSubmit) {
      onSubmit();
    }
  }

  handleCancel() {
    const {onCancel} = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  createComment() {
    const {parent_id} = this.props;
    const {author, body} = this.state;

    API.createComment(parent_id, author, body).then(newComment => {
      this.props.addComment({
        type: ADD_COMMENT,
        comment: newComment
      });
      // reset state after submitting form
      this.setState(this.initialState);
    })
  }

  editComment() {
    const {originalComment} = this.props;
    const {author, body} = this.state;

    API.editComment(originalComment.id, author, body).then(newComment => {
      this.props.editComment({
        type: EDIT_COMMENT,
        comment: newComment
      });
    });
  }

  render() {
    const {author, body} = this.state
      const {originalComment} = this.props;
      const buttonText = originalComment ? "Save" : "Add"
    return (
        <form onSubmit={this.handleSubmit}>
          Author:<br />
          <input type="text" name="author" placeholder="Author Name" value={author} onChange={this.handleChange} />
          Comment:<br />
          <input type="text" name="body" placeholder="Comment" value={body} onChange={this.handleChange}/>
          <button type="submit">{buttonText}</button>
          <Link to='/' ><button onClick={() => {this.handleCancel()}}>Cancel</button></Link>
        </form>
    )
  }
}

function mapStateToProps ({ comment }) {
  return {comment}
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    editComment: (comment) => dispatch(editComment(comment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComment)
