import React, { Component } from 'react'
import Main from './main'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as api from './../services/api'
import { withRouter } from 'react-router'
import { convertToArray } from '../helpers/helpers'
import {setCategories} from "../actions/categories";
import Category from "./category";
import {setPosts} from "../actions/posts";

class App extends Component {
    componentWillMount() {
        this.props.getAllCategories();
        this.props.getAllPosts()

    }

    render() {
        const { history, categories, posts } = this.props


        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={({ match }) =>
                            <Main
                                categories={categories}
                                history={history}
                            />}
                    />
                    <Route
                        path="/category/:url"
                        render={({ match }) =>
                            <Category
                                categories={categories}
                                categoryPath={match.params.url}
                                posts={posts}
                                history={history}
                            />}
                    />

                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        posts: convertToArray(state.posts).filter(post => post.deleted === false),

    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllCategories: () => {
            api.getAllCategories().then(categories => {
                dispatch(setCategories(convertToArray(categories)))
            })
        },
        getAllPosts: () => {
            api.getAllPosts().then(posts => {
                dispatch(setPosts(posts))
            })
        }

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
