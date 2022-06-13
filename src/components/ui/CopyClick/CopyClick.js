import React from 'react';
import copyToClipboard from "../../../helpers/copyToClipboard";
import {toast} from "react-toastify";
import cls from './CopyClick.module.scss'

const CopyClick = ({className = '', children}) => {
    const copy = () => {
        copyToClipboard(children)

        toast('Текст скопирован', {
            position: 'top-right',
            type: 'success',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
        })
    }

    return (
        <span onClick={copy} className={[cls.box, className].join(' ')}>
            {children}
        </span>
    );
};

export default CopyClick;