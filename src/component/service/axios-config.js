import axios from 'axios'
import store from "./../store/redux/storee"
import * as PublicActions from "./../store/redux/PublicActions"
// import { StorageService } from '@storage/storage.service';
// import * as  StorageKeys from '@storage/storage.keys';

const url = axios.create({
    baseURL: "http://89.32.248.231:7777/",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
)

url.interceptors.request.use(async (config) => {
    // config = await addToken(config)
    toggleLoading()

    return config
}, (error) => {
    return Promise.reject(error);
});

url.interceptors.response.use((response) => {

    toggleLoading()

    return response //response['data'];
}, async (error) => {

    toggleLoading()

    if (error.response) {
        const { response: { status } } = error

        toggleSnackBar(status)

        // switch (status) {
        //     case 400:
        //         let message = "Something went wrong"
        //         showSnackbarMessage()
        //         break;

        //     case 401:
        //         showSnackbarMessage()
        //         break;

        //     case 402:
        //         showSnackbarMessage()
        //         break;

        //     case 403:
        //         showSnackbarMessage()
        //         break;
        //     case 404:
        //         showSnackbarMessage()
        //         break;

        //     case 405:
        //         showSnackbarMessage()
        //         break;
        //     default:
        //         break;
        // }
    }
    return Promise.reject(error);
})

function toggleLoading() {
    store.dispatch(PublicActions.toggleLoading())
}
function toggleSnackBar(status) {
    store.dispatch(PublicActions.snackLoading(status))
}


// async function addToken(config) {
//     const token = await StorageService.getData(StorageKeys.MOVIE_ACCESS_TOKEN)
//     if (token && token !== null)
//         config.headers.Authorization = `Bearer ${token}`
//     return config
// }
export default url

