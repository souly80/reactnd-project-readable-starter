export const GET_Gategories = 'GET_Gategories';

const getCategories = (categories) => {
    return {
        type: GET_Gategories,
        payload: categories
    };
};

export default getCategories;
