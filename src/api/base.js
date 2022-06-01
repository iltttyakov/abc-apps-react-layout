import axios from "axios";
import {AUTH_GET_API_METHOD, BASE_API_URL} from "./urls";
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function base(
    method,
    data
) {
    const auth_token = cookies.get('auth_token')

    if (!auth_token && method !== AUTH_GET_API_METHOD) {

        console.log('return to login page')

    } else {

        const formData = new FormData()
        formData.append('body', JSON.stringify({
            method,
            auth_token,
            ...data
        }))

        return new Promise((resolve, reject) => {
            axios.post(
                BASE_API_URL,
                formData,
                {
                    headers: {'Content-Type': 'multipart/form-data',},
                }
            )
                .then(response => {
                    if (response.data.msg !== 'OK') {
                        reject(response.data)
                    } else {
                        resolve(response.data)
                    }
                })
                .catch(response => {
                    reject(response)
                })
        })

    }
}

export default base