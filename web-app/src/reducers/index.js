import {GET_Gategories} from "../actions/index";

const initialState = () => {
    categories: []
};

function reducer (state = initialState(), action) {
    switch(action.type) {
        case GET_Gategories: {
            return {
                ...state,
                content: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export default reducer;