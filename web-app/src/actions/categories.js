export const GET_CATEGORIES = 'GET_CATEGORIES';


export const getCategories = ({categories}) => {
    return {type: GET_CATEGORIES, categories};
};
