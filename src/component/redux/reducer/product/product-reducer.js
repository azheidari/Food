import { ALLPRODUCTS, PRODUCT, LIMITEDPRODUCT, SORTEDPRODUCT, GETALLCARTS, ADDNEWPRODUCT, UPDATEPRODUCT, DELETEPRODUCT } from "../../action/category/category-action"

const initialState = {
    products: [],
    product: {},
    sortedProducts: [],
    limitedProducts: []

}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case ALLPRODUCTS:

            console.log("action.payload")
            console.log(action.payload)
            console.log("action.payload")

            return {
                ...state,
                products: action.payload
            }
        case PRODUCT: {
            return {
                ...state,
                product: action.payload
            }
        }
        case LIMITEDPRODUCT: {
            return {
                ...state,
                limitedProducts: action.payload
            }
        }
        case SORTEDPRODUCT: {
            return {
                ...state,
                sortedProducts: action.payload
            }

        }
        case GETALLCARTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case UPDATEPRODUCT: {
            return {
                ...state,
                products: action.payload
            }
        }
        case GETALLCARTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case DELETEPRODUCT: {
            return {
                ...state,
                products: action.payload
            }
        }
        default:
            return state;
    }
}

export default productReducer