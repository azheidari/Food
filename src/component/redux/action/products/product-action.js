import shopHttp from "../../../services/axios-config";

export const ALLPRODUCTS = "ALLPRODUCTS"
export const PRODUCT = "PRODUCT"
export const SORTEDPRODUCT = "SORTEDPRODUCT"
export const LIMITEDPRODUCT = "LIMITEDPRODUCT"
export const GETALLCARTS = "GETALLCARTS"
export const ADDNEWPRODUCT = "ADDNEWPRODUCT"
export const UPDATEPRODUCT = "UPDATEPRODUCT"
export const DELETEPRODUCT = "DELETEPRODUCT"

export const getAllProduct = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            console.time("getAllProduct")
            shopHttp.get('products')
                .then(response => {
                    console.log("alldataaaaaaaaaaaaresponse.data")
                    console.log(response.data)
                    console.log("alldataaaaaaaaaaaaresponse.data")
                    console.time("getAllProduct")
                    dispatch({ type: ALLPRODUCTS, payload: response.data })

                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const getAllCarts = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get('carts')
                .then(response => {
                    dispatch({ type: GETALLCARTS, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const getProduct = (item) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get(`products/${item}`)
                .then(response => {
                    dispatch({ type: PRODUCT, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}


export const sortedProduct = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get("products?sort=desc")
                .then(response => {
                    dispatch({ type: SORTEDPRODUCT, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}
export const getLimitedProduct = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get("products?limit=1")
                .then(response => {
                    console.log("limitedProduct")
                    console.log(response.data)
                    console.log("limitedProduct")
                    dispatch({ type: LIMITEDPRODUCT, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}
export const addNewProduct = (model) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.post("products", model)
                .then(response => {
                    dispatch({ type: ADDNEWPRODUCT, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))

        })
    }
}
export const updateProduct = (id, model) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.put(`products/${id}`, model)
                .then(response => {
                    dispatch({ type: UPDATEPRODUCT, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const deleteProduct = (id) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.delete(`products/${id}`)
                .then(response => {
                    dispatch({ type: DELETEPRODUCT, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}