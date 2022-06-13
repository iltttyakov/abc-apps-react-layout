import {toast} from "react-toastify";


const errorToasty = msg => {
    toast.error(msg, {
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
    })
}

export default errorToasty