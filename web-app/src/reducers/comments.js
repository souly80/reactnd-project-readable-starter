import{  LOAD_COMMENTS,
    ADD_COMMENT,
    UPVOTE_COMMENT,
    DOWNVOTE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT} from '../actions/types';
import {objectFromArray} from '../utils/helpers'

export const comments = (state = {}, action) => {
    const {comments, comment_id, comment} = action;
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                ...state,
                ...objectFromArray(comments, 'id')
            };
        case ADD_COMMENT:
        case EDIT_COMMENT:
            return {
                ...state,
                [comment.id]: comment
            };
        case UPVOTE_COMMENT:
            return {
                ...state,
                [comment_id]: {
                    ...state[comment_id],
                    'voteScore': state[comment_id]['voteScore'] + 1
                }
            };
        case DOWNVOTE_COMMENT:
            return {
                ...state,
                [comment_id]: {
                    ...state[comment_id],
                    'voteScore': state[comment_id]['voteScore'] - 1
                }
            };
        case DELETE_COMMENT:
            var newState = {...state}
            delete newState[comment_id]
            return newState;
        default:
            return state;
    }

};
