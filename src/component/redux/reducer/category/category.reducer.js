import { ALLCATEGORIES, CATEGORY } from "../../action/category/category-action"

const initialState = {
    categories: [],
    category: {}
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {

        case ALLCATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case CATEGORY: {
           
            return {
                ...state,
                category: action.payload
            }
        }
        default:
            return state;
    }
}

export default shopReducer