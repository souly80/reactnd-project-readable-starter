import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Link, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import timeago from 'timeago.js';
import Modal from 'react-modal';

import * as API from '../services/api-helper';
import VoteScore from './vote-score'
import EditControl from './edit-control'
import NewPost from './add/new-post';
import {DELETE_POST, deletePost, DOWNVOTE_POST, downvotePost, UPVOTE_POST, upvotePost} from "../actions/posts";

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    is_detail: PropTypes.bool,
  }

  initialState = {
    isModalOpen: false,
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  upvotePost() {
    const post_id = this.props.post.id
    API.upvotePost(post_id).then(post => {
      this.props.upvotePost({
        type: UPVOTE_POST,
        post_id
      });
    });
  }

  downvotePost() {
    const post_id = this.props.post.id
    API.downvotePost(post_id).then(() => {
      this.props.downvotePost({
        type: DOWNVOTE_POST,
        post_id
      });
    });
  }

  deletePost() {
    if(window.confirm('Delete Post?')) {
      const post_id = this.props.post.id
      API.deletePost(post_id).then(() => {
        this.props.deletePost({
          type: DELETE_POST,
          post_id
        });
        this.props.history.push('/');
      });
    };
  }

  editPost() {
    this.openModel();
  }

  openModel() {
    this.setState({isModalOpen: true})
  }

  closeModal() {
    this.setState({isModalOpen: false})
  }

  generateModal(post) {
    const {isModalOpen} = this.state;
    const modalStyle = {
      content: {
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: 'auto',
      }
    };
    return (
      <Modal
        style={modalStyle}
        isOpen={isModalOpen}
        onAfterOpen={() => {}}
        onRequestClose={() => {}}
        closeTimeoutMS={0}
        shouldCloseOnOverlayClick={true}
        contentLabel="Edit Post">
        <h2>Edit Post</h2>
        <NewPost originalPost={post} onSubmit={() => {this.closeModal()}} onCancel={() => {this.closeModal()}} />
      </Modal>
    )
  }

  render() {
    const {post} = this.props
    const date = timeago().format(post.timestamp);
    const {is_detail} = this.props;

    return (
      <div className="post">
        {is_detail ? <h1 className="postTitle">{post.title}</h1> : <Link to={`/${post.category}/${post.id}`} ><h2 className="postTitle">{post.title}</h2></Link>}
        <p>{date}  by {post.author}  in <Link to={`/${post.category}`}>{post.category}</Link></p>
        <p>{post.body}</p>
        <VoteScore score={post.voteScore} onUpvote={() => {this.upvotePost()}} onDownvote={() => {this.downvotePost()}} />
          {is_detail ? <EditControl onEdit={() => {this.editPost()}} onDelete={() => {this.deletePost()}}/>
              : ""
          }
        {this.generateModal(post)}
        <hr/>
      </div>
    );
  };
}


function mapStateToProps ({ posts }) {
  return {posts}
}

function mapDispatchToProps (dispatch) {
  return {
    upvotePost: (post_id) => dispatch(upvotePost(post_id)),
    downvotePost: (post_id) => dispatch(downvotePost(post_id)),
    deletePost: (post_id) => dispatch(deletePost(post_id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))
