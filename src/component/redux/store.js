import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk"

import shop from "./reducer/category/category.reducer"
import product from "./reducer/product/product-reducer"
import card from "./reducer/cart/cart-reducer";
import auth from "./reducer/auth/auth-reducer";

const reducers = combineReducers({
    shop,
    product,
    card,
    auth
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))
export default store
