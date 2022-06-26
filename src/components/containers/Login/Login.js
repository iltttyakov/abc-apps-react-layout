import React from 'react';
import Container from "../../ui/Container/Container";
import cls from './Login.module.scss'
import TextInput, {TextInputSizes} from "../../ui/inputs/TextInput/TextInput";
import {useForm} from "react-hook-form";
import Button, {ButtonSizes} from "../../ui/Button/Button";
import storage from "../../../redux/rootActions";
import validatePassword from "../../../helpers/validatePassword";


const Login = () => {
    const {register, handleSubmit, formState: {errors}, setValue, getValues} = useForm()

    const onSubmit = data => storage.auth.login(data)

    return (
        <div className={cls.box}>

            <Container className={cls.container}>
                <h1 className={cls.title}>
                    Вход
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
                    <TextInput
                        label={'Логин'}
                        name={'auth_login'}
                        register={register}
                        errors={errors}
                        placeholder={'Введите логин'}
                        size={TextInputSizes.BIG}
                        className={cls.field}
                        validation={{
                            required: true,
                        }}
                    />
                    <TextInput
                        label={'Пароль'}
                        name={'auth_password'}
                        register={register}
                        errors={errors}
                        placeholder={'Введите пароль'}
                        size={TextInputSizes.BIG}
                        className={cls.field}
                        inputType={'password'}
                        validation={{
                            required: true,
                            minLength: 8,
                            maxLength: 32,
                            validate: validatePassword,
                        }}
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

            </Container>
        </div>
    );
};

export default Login;