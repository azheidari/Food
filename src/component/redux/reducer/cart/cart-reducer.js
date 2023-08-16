import { GETALLCARDS, GETSINGLECARD, GETLIMITCARDS, GETSORTEDCARDS, ADDNEWCARD, UPDATEUSER, DELETEUSER } from "../../action/cart/cart-action"

const initialState = {
    cards: [],
    card: {}
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {

        case GETALLCARDS:
            return {
                ...state,
                cards: action.payload
            }
        case GETSINGLECARD: {
            return {
                ...state,
                card: action.payload
            }
        }
        case GETLIMITCARDS: {
            return {
                ...state,
                cards: action.payload
            }
        }
        case GETSORTEDCARDS: {
            return {
                ...state,
                cards: action.payload
            }

        }
        case ADDNEWCARD: {
            return {
                ...state,
                cards: action.payload
            }
        }
        case UPDATEUSER: {
            return {
                ...state,
                cards: action.payload
            }
        }
        case DELETEUSER: {
            return {
                ...state,
                cards: action.payload
            }
        }
        default:
            return state;
    }
}

export default cardReducer