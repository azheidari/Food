import shopHttp from "../../../services/axios-config";

export const GETALLUSERSS = "GETALLUSERSS"
export const GETSINGLEUSER = "GETSINGLEUSER"
export const LIMITEDUSER = "LIMITEDUSER"
export const SORTEDUSERS = "SORTEDUSERS"
export const ADDNEWUSER = "ADDNEWUSER"
export const UPDATEUSER = "UPDATEUSER"
export const DELETEUSER = "DELETEUSER"


export const getAllUsers = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get('users')
                .then(response => {
                    dispatch({ type: GETALLUSERSS, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const getUser = (item) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get(`users/${item}`)
                .then(response => {
                    dispatch({ type: GETSINGLEUSER, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}


export const sortedUser = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get("users?sort=desc")
                .then(response => {
                    dispatch({ type: SORTEDUSERS, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}
export const getLimitedUser = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get("users?limit=5")
                .then(response => {
                    dispatch({ type: LIMITEDUSER, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

// Get carts in a date range



export const addNewUser = (model) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.post("users", model)
                .then(response => {
                    dispatch({ type: ADDNEWUSER, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))

        })
    }
}
export const updateUser = (id, model) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.put(`users/${id}`, model)
                .then(response => {
                    dispatch({ type: UPDATEUSER, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const deleteUser = (id) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.delete(`users/${id}`)
                .then(response => {
                    dispatch({ type: DELETEUSER, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}