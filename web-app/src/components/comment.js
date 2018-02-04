import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import timeago from 'timeago.js';
import Modal from 'react-modal';

import * as API from '../services/api-helper';
import VoteScore from './vote-score';
import EditControl from './edit-control';
import NewComment from './add/new-comment';
import {
    DELETE_COMMENT, deleteComment, DOWNVOTE_COMMENT, downvoteComment, UPVOTE_COMMENT,
    upvoteComment
} from "../actions/comments";

class Comment extends Component {


  constructor(props) {
    super(props);
    this.state = {
        isModalOpen: false,
    };
  }

  upvoteComment() {
    const comment_id = this.props.comment.id
    API.upvoteComment(comment_id).then(comment => {
      this.props.onUpvoteComment({
        type: UPVOTE_COMMENT,
        comment_id
      });
    });
  }

  downvoteComment() {
    const comment_id = this.props.comment.id
    API.downvoteComment(comment_id).then(comment => {
      this.props.onDownvoteComment({
        type: DOWNVOTE_COMMENT,
        comment_id
      });
    });
  }

  deleteComment() {
    if(window.confirm('Delete Comment?')) {
      const comment_id = this.props.comment.id
      API.deleteComment(comment_id).then(() => {
        this.props.onDeleteComment({
          type: DELETE_COMMENT,
          comment_id
        });
      });
    };
  }

  editComment() {
    this.openModel();
  }

  openModel() {
    this.setState({isModalOpen: true})
  }

  closeModal() {
    this.setState({isModalOpen: false})
  }

  render() {
    const {isModalOpen} = this.state;
    const {comment} = this.props
    const date = timeago().format(comment.timestamp);

    return (
      <div>
        <h3>{comment.body}</h3>
        <p>{date}  by {comment.author}</p>
        <VoteScore score={comment.voteScore} onUpvote={() => {this.upvoteComment()}} onDownvote={() => {this.downvoteComment()}} />
        <EditControl onEdit={() => {this.editComment()}} onDelete={() => {this.deleteComment()}}/>

        <Modal
            isOpen={isModalOpen}
            onAfterOpen={() => {}}
            onRequestClose={() => {}}
            closeTimeoutMS={0}
            shouldCloseOnOverlayClick={true}
            contentLabel="Edit Comment">
          <h1>Edit Comment</h1>
          <NewComment originalComment={comment} parent_id={comment.parentId} onSubmit={() => {this.closeModal()}} onCancel={() => {this.closeModal()}}/>
        </Modal>
        <hr/>
      </div>
    );
  };
}

const mapStateToProps  = ({ comments }) => {
  return {comments};
}

const  mapDispatchToProps = (dispatch) => {
  return {
    onUpvoteComment: (comment_id) => dispatch(upvoteComment(comment_id)),
    onDownvoteComment: (comment_id) => dispatch(downvoteComment(comment_id)),
    onDeleteComment: (comment_id) => dispatch(deleteComment(comment_id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));
