import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as API from '../../services/api-helper';
import {arrayFromObject} from '../../utils/helpers';
import {ADD_POST, addPost, EDIT_POST, editPost} from "../../actions/posts";
import {Link} from "react-router-dom";

class NewPost extends Component {

  initialState = {
    author: '',
    category: 'select',
    title: '',
    body: '',
  };


  constructor(props) {
    super(props);

    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {originalPost, defaultCategory} = this.props;
    if (originalPost) {
      this.setState({
        author: originalPost.author,
        category: originalPost.category,
        title: originalPost.title,
        body: originalPost.body});
    } else {
      if (defaultCategory) {
        this.setState({category: defaultCategory})
      }
    }
  }

  getFormValidationState() {
    const {author, category, title, body} = this.state;
    return (author < 1 && title < 1 && body < 1 && category === 'select');
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.getFormValidationState()) {
      return;
    }

    const {originalPost} = this.props;
    if (originalPost) { // should edit an existing post
      this.editPost();
    } else { // should create a new post
      this.createPost();
    }
    // call onSubmit function (if available)
    const {onSubmit} = this.props;
    if (onSubmit) {
      onSubmit();
    }
  }

  // handle cancellation
  handleCancel() {
    // call onCancel function (if available)
    const {onCancel} = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  // create a new post
  createPost() {
    const {author, category, title, body} = this.state;

      API.createPost(author, category, title, body).then(newPost => {
      this.props.addPost({
        type: ADD_POST,
        post: newPost
      });
      // reset state after submitting form
      this.setState(this.initialState);
    })
  }

  // edit existing post
  editPost() {
    const {originalPost} = this.props;
    const {author, category, title, body} = this.state;

    API.editPost(originalPost.id, author, category, title, body).then(newPost => {
      this.props.editPost({
        type: EDIT_POST,
        post: newPost
      });
    });
  }

  render() {
      const {originalPost} = this.props;
      const buttonContent = originalPost ? "Save" : "Add";
    const {author, category, title, body} = this.state
    const {categories} = this.props;
    const categoriesArray = arrayFromObject(categories, 'name');

    return (
        <div>
          <h3 className="wrap">new Post</h3>
          <form onSubmit={this.handleSubmit}>
            Author:<br />
            <input type="text" name="author" placeholder="Author Name" value={author} onChange={this.handleChange} />
            Category:<br />
            <select name="category" placeholder="select" value={category} onChange={this.handleChange}>
              <option value="select">categories</option>
                {categoriesArray.map(c => (<option key={c.path} value={c.path}>{c.name}</option>))}
            </select>
            Title:<br />
            <input type="text" name="title" placeholder="Title" value={title} onChange={this.handleChange}/>
            Body:<br />
            <input type="text" name="body" placeholder="Body" value={body} onChange={this.handleChange}/>
            <button type="submit">{buttonContent}</button>
            <Link to='/' ><button onClick={() => {this.handleCancel()}}>Cancel</button></Link>
          </form>
        </div>
    )
  }
}

function mapStateToProps ({ post, categories }) {
  return {
    post,
    categories,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (post) => dispatch(addPost(post)),
    editPost: (post) => dispatch(editPost(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
