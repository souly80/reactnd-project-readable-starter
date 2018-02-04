

import {ADD_POST, DELETE_POST, DOWNVOTE_POST, EDIT_POST, GET_POSTS, UPVOTE_POST} from "./types";

export const loadPosts = ({posts}) => {
    return {type: GET_POSTS, posts};
};

export const addPost = ({post}) => {
    return {type: ADD_POST, post};
};

export const upvotePost = ({post_id}) => {
    return {type: UPVOTE_POST, post_id};
};

export const downvotePost = ({post_id}) => {
    return {type: DOWNVOTE_POST, post_id};
};

export const editPost = ({post}) => {
    return {type: EDIT_POST, post};
};

export const deletePost = ({post_id}) => {
    return {type: DELETE_POST, post_id};
};