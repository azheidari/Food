import { GETALLUSERSS, GETSINGLEUSER, LIMITEDUSER, SORTEDUSERS, ADDNEWUSER, UPDATEUSER, DELETEUSER } from "../../action/auth/auth-action";

const initialState = {
    users: [],
    user: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case GETALLUSERSS:
            return {
                ...state,
                users: action.payload
            }
        case GETSINGLEUSER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case LIMITEDUSER: {
            return {
                ...state,
                users: action.payload
            }
        }
        case SORTEDUSERS: {
            return {
                ...state,
                users: action.payload
            }

        }
        case ADDNEWUSER: {
            return {
                ...state,
                users: action.payload
            }
        }
        case UPDATEUSER: {
            return {
                ...state,
                users: action.payload
            }
        }
        case DELETEUSER: {
            return {
                ...state,
                users: action.payload
            }
        }
        default:
            return state;
    }
}

export default authReducer