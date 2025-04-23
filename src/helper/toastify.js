import {  toast } from 'react-toastify';

export const toastify = (message, type) => {
    switch (type) {
        case 'success':
             return toast.success(message)
        case 'error':
            return toast.error(message)
        default:
            return toast.info(message)
    }
}