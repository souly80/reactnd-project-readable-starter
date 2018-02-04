import React, {Component} from 'react';

import {connect} from 'react-redux';

import ReactLoading from 'react-loading';

import {arrayFromObject} from '../../utils/helpers';
import * as API from '../../services/api-helper';
import Post from '../post';
import Comment from '../comment';
import NewComment from '../add/new-comment';
import {LOAD_COMMENTS} from "../../actions/types";
import {loadComments} from "../../actions/comments";

class PostDetailsView extends Component {
  constructor(props) {
    super(props);
    this.fetchPostComments();
  }

  fetchPostComments() {
    const {post_id} = this.props.match.params
    API.fetchPostComments(post_id).then(comments => {
      this.props.loadComments({type: LOAD_COMMENTS, comments});
    });
  }

  render() {
    const {post_id} = this.props.match.params
    const {posts, comments} = this.props
    const post = posts[post_id];

    const commentsArray = arrayFromObject(comments, 'id');
    const postComments = commentsArray.filter(c => (c.parentId === post_id));

    if (post) {
      return (
        <div className="post">
          <Post post={post} is_detail={true}/>
          <h2 className="wrap">{postComments.length} Comments</h2>
          <ol>
            {postComments.map((c) => (<Comment key={c.id} comment={c}/>))}
          </ol>
          <div className="addCommentContainer">
            <h3 className="wrap">Add Comment</h3>
            <NewComment parent_id={post_id}/>
          </div>
        </div>
      );
    }
    return <ReactLoading type="bubbles" color="#444"/>;
  }
}

function mapStateToProps({posts, comments}) {
  return {posts, comments}
}

function mapDispatchToProps(dispatch) {
  return {
    loadComments: (comments) => dispatch(loadComments(comments))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsView);
