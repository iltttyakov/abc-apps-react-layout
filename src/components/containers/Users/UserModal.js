import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useForm, useWatch} from "react-hook-form";
import storage from "../../../redux/rootActions";
import {deleteConfirm, unsavedExitConfirm} from "../../../helpers/swal";
import UserForm from "./UserForm";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonTypes} from "../../ui/Button/Button";
import Modal, {ModalSizes} from "../../ui/Modal/Modal";
import {getRights, getRoleFromRights, roleRights, roles, watchingFields} from "./rights";
import api from "../../../api/api";


const defaultValues = {
    id: '',
    user_login: '',
    user_password: '',
    grey: "grey_no",
    white: "white_no",
    accs: "accs_no",
    board: "board_no",
    streams: "streams_no",
    notifications: "notifications_no",
    is_banned: false,
    streams_owner: false,
    streams_apps_buyer: false,
    streams_apps_tenant: false,
    apps_add: false,
    apps_del: false,
    apps_rw_buyer: false,
    apps_playMarket: false,
    apps_appStore: false,
    apps_huawei: false,
    apps_list_buyer: false,
    apps_list_tenant: false,
    accs_add: false,
    accs_del: false,
    board_add: false,
    board_del: false,
    users: false,
    dev: false,
    domains: false,
    notifications_owner: false,
    notifications_buyer: false,
    log: false,
    apps_buyer: false,
    apps_tenant: false
}

const userUnpacking = user => {
    let data = defaultValues

    if (user) {
        const rights = getRights(user.rights)

        data = {
            ...data,
            ...user,
            ...rights,
            user_login: user['login'],
            user_password: user['password'],
            is_banned: user['is_banned'] === 'true',
        }
    }

    return data
}

const roleUnpacking = user => {
    let role = 'none'

    if (user) {
        Object.keys(roles).forEach(roleName => {
            if (roles[roleName] === user.rights) {
                role = roleName
            }
        })
    }

    return role
}

const userPacking = (data, user) => {
    const clearData = Object.filter(data, (value) => !!value && value.length !== 0)

    return {
        id: data['id'],
        ...clearData
    }
}


const UserModal = () => {
    const user = useSelector(state => state.user.active)
    const modalIsOpen = useSelector(state => state.user.modalIsOpen)
    const userIsLoading = useSelector(state => state.user.activeIsLoading)
    const editInProcess = useSelector(state => state.user.editInProcess)
    const [dirty, setDirty] = useState(false)

    const mainForm = useForm({defaultValues})
    const roleForm = useForm({defaultValues: {role: 'none'}})

    useEffect(() => {
        mainForm.reset(userUnpacking(user))
        roleForm.setValue('role', roleUnpacking(user))
    }, [user])

    useEffect(() => {
        const watcher = mainForm.watch((value, {name, type}) => {
            roleForm.setValue('role', getRoleFromRights(value))
            setDirty(mainForm.formState.isDirty)
        })

        return () => watcher.unsubscribe()
    }, [mainForm.watch])

    const changeRole = e => {
        const newRole = e.target.value
        const newRoleRights = roleRights[newRole]
        Object.keys(newRoleRights).forEach(right => {
            mainForm.setValue(right, newRoleRights[right])
        })
        setDirty(mainForm.formState.isDirty)
    }

    const onSubmit = data => {
        storage.user.edit(userPacking(data, user))
    }
    const submit = () => mainForm.handleSubmit(onSubmit)()

    const onCancel = () => {
        storage.user.modalClose()
    }
    const cancel = () => {
        if (dirty) unsavedExitConfirm(onCancel)
        else onCancel()
    }

    // const del = () => {
    //     deleteConfirm(() => {
    //         storage.user.del(user.id)
    //     })
    // }


    return (
        <Modal
            isOpen={modalIsOpen}
            title={user ? 'Изменение данных пользователя' : 'Добавление нового пользователя'}
            onClose={cancel}
            isLoading={userIsLoading}
            size={ModalSizes.BIG}
        >

            <UserForm
                form={mainForm}
                roleForm={roleForm}
                changeRole={changeRole}
                isOpen={modalIsOpen}
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
                    // user
                    //     ? <Button
                    //         disabled={editInProcess}
                    //         onClick={del}
                    //         type={ButtonTypes.STROKE}
                    //     >
                    //         Удалить
                    //     </Button>
                    //     : null,
                    <Button
                        onClick={cancel}
                        type={ButtonTypes.STROKE}
                    >
                        Отменить
                    </Button>,
                ]}
            />
        </Modal>
    );
};

export default UserModal;