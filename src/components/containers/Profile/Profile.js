import React from 'react';
import cls from './Profile.module.scss'
import ProfileForm from "./ProfileForm";
import {useForm} from "react-hook-form";
import Button, {ButtonSizes} from "../../ui/Button/Button";
import {useSelector} from "react-redux";
import actions from "../../../redux/rootActions";


const Profile = () => {
    const form = useForm()
    const editOnProcess = useSelector(state => state.auth.passwordEditInProcess)

    const onSubmit = data => {
        actions.auth.editPassword(
            data['old_password'],
            data['new_password']
        )
    }
    const validateBeforeSubmit = data => {
        let hasErrors = false
        if (data['new_password'] !== data['new_password_repeat']) {
            hasErrors = true
            form.setError('new_password', {type: 'custom', message: ''})
            form.setError('new_password_repeat', {type: 'custom', message: 'Пароли должны совпадать'})
        }
        if (!hasErrors) onSubmit(data)
    }
    const submit = () => form.handleSubmit(validateBeforeSubmit)()

    return (
        <div className={cls.box}>
            <h1 className={cls.title}>Личный кабинет</h1>
            <p className={cls.subtitle}>Сменить пароль</p>
            <ProfileForm form={form}/>
            <Button
                className={cls.submit}
                shadow={false}
                size={ButtonSizes.BIG}
                disabled={editOnProcess}
                onClick={submit}
            >
                Сменить пароль
            </Button>
        </div>
    );
};

export default Profile;