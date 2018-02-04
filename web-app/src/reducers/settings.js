import { SET_SORTING_PREFERENCE_BY_DATE,
    SET_SORTING_PREFERENCE_BY_SCORE
} from '../actions/settings';

export const prefrences = (state = {}, action) => {

    switch (action.type) {
        case SET_SORTING_PREFERENCE_BY_DATE:
            return {
                ...state,
                ['sorting']: 'byDate'
            };
        case SET_SORTING_PREFERENCE_BY_SCORE:
            return {
                ...state,
                ['sorting']: 'byScore'
            };
        default:
            return state;
    }
};