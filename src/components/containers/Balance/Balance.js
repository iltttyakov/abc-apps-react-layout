import React, {useEffect} from 'react';
import Role from "../Role/Role";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import cls from './Balance.module.scss'

const Balance = () => {
    const balance = useSelector(state => state.auth.install_balance)

    useEffect(() => {
        if (balance && balance < 100) {
            toast.error(
                'Баланс установок подходит к нулю. Свяжитесь с вашим менеджером для пополнения баланса',
                {
                    className: cls.toast,
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                }
            )
        }
    }, [balance])

    return balance
        ? <Role accessTo={'apps_tenant'}>
            <span>Баланс: {balance} установок</span>
        </Role>
        : null
};

export default Balance;