


import {ADD_COMMENT, DELETE_COMMENT, DOWNVOTE_COMMENT, EDIT_COMMENT, LOAD_COMMENTS, UPVOTE_COMMENT} from "./types";

export const addComment = ({comment}) => {
    return {type: ADD_COMMENT, comment};
};

export const upvoteComment = ({comment_id}) => {
    return {type: UPVOTE_COMMENT, comment_id};
};

export const downvoteComment = ({comment_id}) => {
    return {type: DOWNVOTE_COMMENT, comment_id};
};

export const editComment = ({comment}) => {
    return {type: EDIT_COMMENT, comment};
};

export const deleteComment = ({comment_id}) => {
    return {type: DELETE_COMMENT, comment_id};
};

export const loadComments = ({comments}) => {
    return {type: LOAD_COMMENTS, comments};
};