import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import storage from "../../../redux/rootActions";
import {unsavedExitConfirm} from "../../../helpers/swal";
import {getRights} from "../Users/rights";
import Modal, {ModalSizes} from "../../ui/Modal/Modal";
import UsersTenantForm from "./UsersTenantForm";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonTypes} from "../../ui/Button/Button";


const defaultValues = {
    id: '',
    user_login: '',
    user_password: '',
    is_banned: false,
    install_balance: 0,
    install_balance_add: 0,
    organic_apps: [],
}

const userTenantUnpacking = user => {
    let data = defaultValues

    if (user) {
        data = {
            ...defaultValues,
            ...user,
            user_login: user['login'],
            user_password: user['password'],
            is_banned: user['is_banned'] === 'true',
        }
    }

    return data
}


const userTenantPacking = (data, user) => {
    const clearData = Object.filter(data, (value) => !!value && value.length !== 0)

    return {
        id: data['id'],
        ...clearData
    }
}

const UsersTenantModal = () => {
    const user = useSelector(state => state.usersTenant.active)
    const modalIsOpen = useSelector(state => state.usersTenant.modalIsOpen)
    const userIsLoading = useSelector(state => state.usersTenant.activeIsLoading)
    const editInProcess = useSelector(state => state.usersTenant.editInProcess)
    const [dirty, setDirty] = useState(false)

    const form = useForm({defaultValues})

    useEffect(() => {
        form.reset(userTenantUnpacking(user))
    }, [user])

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])


    const reset = () => {
        form.reset(defaultValues)
    }

    const onSubmit = data => {
        storage.usersTenant.edit(userTenantPacking(data, user), reset)
    }
    const submit = () => form.handleSubmit(onSubmit)()

    const onCancel = () => {
        storage.usersTenant.modalClose()
        reset()
    }
    const cancel = () => {
        if (dirty) unsavedExitConfirm(onCancel)
        else onCancel()
    }


    return (
        <Modal
            isOpen={modalIsOpen}
            title={user ? 'Изменение данных пользователя' : 'Добавление нового пользователя'}
            onClose={cancel}
            isLoading={userIsLoading}
            size={ModalSizes.BIG}
        >
            <UsersTenantForm
                form={form}
                onSubmit={onSubmit}
            />
            <Actions
                items={[
                    <Button
                        disabled={editInProcess}
                        onClick={submit}
                    >
                        {user ? 'Сохранить' : 'Создать'}
                    </Button>,
                    <Button
                        onClick={cancel}
                        type={ButtonTypes.STROKE}
                        disabled={editInProcess}
                    >
                        Отменить
                    </Button>,
                ]}
            />
        </Modal>
    );
};

export default UsersTenantModal;