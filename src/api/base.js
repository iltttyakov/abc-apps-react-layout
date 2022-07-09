import axios from "axios";
import methods, {BASE_API_URL} from "./methods";
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function base(
    method,
    body,
    optional = []
) {
    const auth_token = cookies.get('auth_token')

    if (!auth_token && method !== methods.auth.get) {

        window.location.href = '/'

    } else {

        const formData = new FormData()
        formData.append('body', JSON.stringify({
            method,
            auth_token,
            ...body
        }))

        if (optional) {
            optional.forEach(row => {
                formData.append(row.name, row.data)
            })
        }

        return new Promise((resolve, reject) => {
            axios.post(
                BASE_API_URL,
                formData,
                {
                    headers: {'Content-Type': 'multipart/form-data',},
                }
            )
                .then(response => {
                    if (response.data.msg === 'Ошибка авторизации' && method !== methods.auth.get) {
                        window.location.href = '/'
                        reject(response.data)
                    }

                    if (response.data.msg !== 'OK') {
                        reject(response.data)
                    } else {
                        resolve(response.data)
                    }
                })
                .catch(response => {
                    if (response.data.msg === 'Ошибка авторизации' && method !== methods.auth.get) {
                        window.location.href = '/'
                    }
                    reject(response)
                })
        })

    }
}

export default base