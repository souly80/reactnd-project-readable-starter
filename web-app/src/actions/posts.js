export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

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