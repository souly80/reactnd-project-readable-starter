import React, {Component} from 'react';
import Home from './components/home/main';
import './App.css';
import NewPost from './components/add/new-post';
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from './components/header';
import CategoryVIew from './components/views/category';
import PostDetailsView from './components/views/post-details';
import {connect} from 'react-redux';
import {loadPosts} from "./actions/posts";
import {getCategories} from "./actions/categories";
import * as API from "./services/api-helper";
import {GET_CATEGORIES, GET_POSTS} from "./actions/types";
import NotFound from "./components/not-found";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categories:[]
    };
    this.fetchPosts();
    this.fetchCategories();
  }

  fetchPosts() {
      API.fetchPosts().then((posts) => {
          this.props.onLoadPosts({type: GET_POSTS, posts});
      });
  }

  fetchCategories() {
      API.fetchCategories().then(categories => {
      this.props.onLoadCategories({type: GET_CATEGORIES, categories});
      this.setState({categories});
    });
  }

  render() {
    return (
      <div className="App">
          <Header categories={this.state.categories}/>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/newpost' component={NewPost}/>
            <Route exact path='/notfound' component={NotFound}/>
            <Route exact path='/:category_name' component={CategoryVIew}/>
            <Route exact path='/:category_name/:post_id' component={PostDetailsView}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPosts: (posts) => dispatch(loadPosts(posts)),
    onLoadCategories: (categories) => dispatch(getCategories(categories))
  }
};

export default withRouter(connect(null, mapDispatchToProps)(App));

