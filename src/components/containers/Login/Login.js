import React from 'react';
import Container from "../../wrappers/Container/Container";
import cls from './Login.module.scss'
import TextInput, {TextInputSizes} from "../../ui/inputs/TextInput/TextInput";
import {useForm} from "react-hook-form";
import Button, {ButtonSizes} from "../../ui/Button/Button";
import storage from "../../../redux/storage";
import Cookies from "universal-cookie";
import {useSelector} from "react-redux";


const Login = () => {
    const {register, handleSubmit, formState: {errors}, setValue, getValues} = useForm()
    const user = useSelector(state => state.auth)

    const onSubmit = (data, e) => {
        storage.auth.login(data)
    }

    const onError = (errors, e) => {
        console.log(errors, e)
    }

    const showAuthToken = () => {
        const cookie = new Cookies()
        console.log(cookie.get('auth_token'))
    }

    const logout = () => {
        storage.auth.logout()
    }

    const getUser = () => {
        storage.auth.get()
    }

    const logUser = () => {
        console.log(user)
    }


    return (
        <div className={cls.box}>

            <Container className={cls.container}>
                <h1 className={cls.title}>
                    Вход
                </h1>

                <form onSubmit={handleSubmit(onSubmit, onError)} className={cls.form}>
                    <TextInput
                        label={'Логин'}
                        name={'auth_login'}
                        register={register}
                        errors={errors['login']}
                        placeholder={'Введите логин'}
                        size={TextInputSizes.BIG}
                        className={cls.field}
                    />
                    <TextInput
                        label={'Пароль'}
                        name={'auth_password'}
                        register={register}
                        errors={errors['login']}
                        placeholder={'Введите пароль'}
                        size={TextInputSizes.BIG}
                        className={cls.field}
                    />
                    <Button
                        buttonType={'submit'}
                        className={cls.submit}
                        size={ButtonSizes.BIG}
                    >
                        Войти
                    </Button>
                </form>

                {/*<div*/}
                {/*    className={cls.bottomImage}*/}
                {/*    style={{*/}
                {/*        backgroundImage: `url(${bottomImage})`*/}
                {/*    }}*/}
                {/*/>*/}

                <br/>
                <Button
                    onClick={showAuthToken}
                >
                    showAuthToken
                </Button>
                <br/>
                <Button
                    onClick={logout}
                >
                    Выйти
                </Button>
                <br/>
                <Button
                    onClick={() => {
                        console.log(storage.auth.isAuthorized())
                    }}
                >
                    Авторизован?
                </Button>
                <br/>
                <Button
                    onClick={() => {
                        getUser()
                    }}
                >
                    GET
                </Button>
                <br/>
                <Button
                    onClick={() => {
                        logUser()
                    }}
                >
                    LOG
                </Button>

            </Container>
        </div>
    );
};

export default Login;