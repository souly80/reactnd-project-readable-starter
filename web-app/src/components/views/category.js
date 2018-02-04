import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import {sortedBy} from '../../utils/helpers';
import Post from '../post';
import SortButtons from '../select-sort';

class CategoryView extends Component {
  render() {
    const {posts} = this.props
    const {category_name} = this.props.match.params

    const {sorting} = this.props.prefrences;
    const postsArray = sortedBy(posts, sorting);
    const categoryPosts = postsArray.filter(p => (p.category === category_name));

    return (
      <div className="category">
          <div>
              <h1 className="wrap">{categoryPosts.length} {category_name} Posts</h1>
              <SortButtons/>
          </div>
        <br/>
        <ul>
          {categoryPosts.map((p) => (<Post key={p.id} post={p}/>))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({posts, categories, prefrences}) {
  return {posts, categories, prefrences}
}

export default withRouter(connect(mapStateToProps)(CategoryView));
