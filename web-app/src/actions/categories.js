
import {GET_CATEGORIES} from "./types";

export const getCategories = ({categories}) => {
    return {type: GET_CATEGORIES, categories};
};
