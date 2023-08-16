import shopHttp from "../../../services/axios-config";

export const ALLCARTS = "ALLCARTS"
export const GETSINGLECART = "GETSINGLECART"
export const GETLIMITCARDS = "GETLIMITCARDS"
export const GETSORTEDCARDS = "GETSORTEDCARDS"
export const ADDCARD = "ADDCARD"
export const UPDATECARD = "UPDATECARD"
export const DELETECARD = "DELETECARD"
export const getCardsInRangeDate = "getCardsInRangeDate"



export const getAllCards = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get("/users")
                .then(response => {
                    dispatch({ type: ALLCARTS, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const getSingleCard = (id) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get(`/users/${id}`)
                .then(response => {
                    dispatch({ type: GETSINGLECART, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const getSortedCard = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get("users?sort=desc")
                .then(response => {
                    dispatch({ type: GETSORTEDCARDS, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const getLimitedCard = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get("users?limit=5")
                .then(response => {
                    dispatch({ type: GETLIMITCARDS, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}


export const addCard = (model) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.post("users", model)
                .then(response => {
                    dispatch({ type: ADDCARD, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const updatedCard = (id, model) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.patch(`users${id}`, model)
                .then(response => {
                    dispatch({ type: UPDATECARD, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const deletedCart = (id) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.delete(`users${id}`)
                .then(response => {
                    dispatch({ type: DELETECARD, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}

export const getCardsInRangeDatee = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            shopHttp.get("carts?startdate=2019-12-10&enddate=2020-10-10")
                .then(response => {
                    dispatch({ type: getCardsInRangeDate, payload: response.data })
                    resolve()
                }).catch(error => console.log(error))
        })
    }
}


