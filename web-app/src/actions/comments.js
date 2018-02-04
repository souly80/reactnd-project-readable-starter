export const ADD_COMMENT = 'ADD_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const LOAD_COMMENTS = 'LOAD_COMMENTS'


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