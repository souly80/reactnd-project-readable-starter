import React, {Component} from 'react';

import {connect} from 'react-redux';

import {sortedBy} from '../../utils/helpers';
import Post from '../post';
import SelectSort from '../select-sort';

class Home extends Component {

  render() {
    const {posts, prefrences} = this.props
    const allPosts = sortedBy(posts, prefrences.sorting);
    return (
      <div>
        <h1 className="wrap">{allPosts.length} Posts</h1>
        <SelectSort/>
        <ul>
          {allPosts.map((post) => (<Post key={post.id} post={post}/>))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({posts, prefrences}) {
  return {posts, prefrences}
}

export default connect(mapStateToProps)(Home);
