
import {
    GET_POSTS,
    ADD_POST,
    UPVOTE_POST,
    DOWNVOTE_POST,
    EDIT_POST,
    DELETE_POST} from '../actions/types';
import {objectFromArray} from '../utils/helpers'

export const posts = (state = {}, action) => {
    const {posts, post_id, post} = action;

    switch (action.type) {
        case GET_POSTS:
            const filteredPosts = posts.filter(p => (p.deleted !== true))
            return {
                ...state,
                ...objectFromArray(filteredPosts, 'id')
            }
        case ADD_POST:
        case EDIT_POST:
            return {
                ...state,
                [post.id]: post
            };
        case UPVOTE_POST:
            return {
                ...state,
                [post_id]: {
                    ...state[post_id],
                    'voteScore': state[post_id]['voteScore'] + 1
                }
            };
        case DOWNVOTE_POST:
            return {
                ...state,
                [post_id]: {
                    ...state[post_id],
                    'voteScore': state[post_id]['voteScore'] - 1
                }
            };
        case DELETE_POST:
            var newState = {...state}
            delete newState[post_id]
            return newState;
        default:
            return state;
    }
};
