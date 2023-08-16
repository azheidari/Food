import shopHttp from "../../../services/axios-config";

export const ALLCATEGORIES = "ALLCATEGORIES"
export const CATEGORY = "CATEGORY"

// "https://fakestoreapi.com/products/categories"
export const getAllCategories = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get("products/categories")
                .then(response => {
                    dispatch({ type: ALLCATEGORIES, payload: response.data })
                    console.log(response.data)
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const getCategory = (item) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get(`products/category/${item}`)
                .then(response => {
                    dispatch({ type: CATEGORY, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}
