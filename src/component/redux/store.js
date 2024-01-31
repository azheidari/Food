import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk"

import shop from "./reducer/category/category.reducer"

const reducers = combineReducers({
    shop,
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))
export default store
