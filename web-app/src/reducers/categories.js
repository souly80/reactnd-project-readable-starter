import {GET_CATEGORIES} from '../actions/types';
import {objectFromArray} from "../utils/helpers";

export const categories = (state = {}, action) => {
    const {categories} = action;
        if(action.type === GET_CATEGORIES)
            return objectFromArray(categories, 'name');
        return state;
}
