import {toast} from "react-toastify";


class AsyncToasty {
    constructor(msg) {
        this.msg = msg
        this.toast = toast.loading(msg, {
            position: 'top-right',
            autoClose: 3500,
            hideProgressBar: false,
        })
    }

    success(msg) {
        toast.update(this.toast, {
            render: msg,
            type: 'success',
            isLoading: false,
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
        })
    }

    error(msg) {
        toast.update(this.toast, {
            render: msg,
            type: 'error',
            isLoading: false,
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
        })
    }
}

export default AsyncToasty