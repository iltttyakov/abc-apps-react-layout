import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import storage from "../../../redux/rootActions";
import {unsavedExitConfirm} from "../../../helpers/swal";
import UserForm from "./UserForm";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonTypes} from "../../ui/Button/Button";
import Modal, {ModalSizes} from "../../ui/Modal/Modal";
import inArray from "../../../helpers/inArray";


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
    streams_own_buyer_tenant: false,
    streams_default: false,
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
    users_tenant: false,
    dev: false,
    domains: false,
    notifications_owner: false,
    notifications_buyer: false,
    log: false,
    apps_buyer: false,
    apps_tenant: false,
    apps_manager: false,
    install_balance_add: null,
}


/**
 * Возвращает index роли из массива user.get_roles, соотвествующий значению формы
 * @param data значения формы
 * @param roles массив из user.get_roles
 * @returns {null} index роли из массива user.get_roles
 */
const getRoleFromData = (data, roles) => {
    const ignoreFields = [
        'id', 'user_login', 'login', 'user_password',
        'password', 'is_banned', 'rights',
        'install_balance', 'install_balance_add', 'organic_apps', 'organic_apps_all',
        'board_no', 'board_rw',
        'streams_no', 'streams_own', 'streams_all',
        'grey_no', 'grey_r', 'grey_rw',
        'white_no', 'white_r', 'white_rw',
        'accs_no', 'accs_r', 'accs_rw',
        'notifications_no', 'notifications_own', 'notifications_all'
    ]

    let resultIndex = null

    // проходим по всем ролям
    Object.keys(roles).forEach(roleIndex => {
        // получаем значения полей
        const roleRights = roles[roleIndex].rights
        let isThisRole = true

        // проходим по всем полям формы
        Object.keys(data).forEach(fieldName => {
            if (!inArray(ignoreFields, fieldName)) {
                if (data[fieldName] || roleRights[fieldName]) {
                    isThisRole = isThisRole && (data[fieldName] === roleRights[fieldName])
                }
            }
        })

        if (isThisRole) {
            resultIndex = roleIndex
        }
    })

    return resultIndex
}

const getRights = rights => {
    const rightsFields = {
        'board': ['board_no', 'board_rw'],
        'streams': ['streams_no', 'streams_own', 'streams_all'],
        'grey': ['grey_no', 'grey_r', 'grey_rw'],
        'white': ['white_no', 'white_r', 'white_rw'],
        'accs': ['accs_no', 'accs_r', 'accs_rw'],
        'notifications': ['notifications_no', 'notifications_own', 'notifications_all']
    }

    rights = rights.split(',')
    const data = {}

    rights.forEach(right => {
        data[right] = '1'
    })

    Object.keys(rightsFields).forEach(fieldName => {
        let filled = false
        rightsFields[fieldName].forEach(value => {
            if (inArray(rights, value)) {
                data[fieldName] = value
                filled = true
            }
        })
        if (!filled) data[fieldName] = rightsFields[fieldName][0]
    })

    return data
}

const userUnpacking = (user, rights) => {
    let data = defaultValues

    if (user) {
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

const userPacking = (data, user) => {
    const clearData = Object.filter(data, (value) => !!value && value.length !== 0)

    return {
        id: user['id'],
        ...clearData
    }
}


const UserModal = () => {
    const user = useSelector(state => state.user.active)
    const modalIsOpen = useSelector(state => state.user.modalIsOpen)
    const userIsLoading = useSelector(state => state.user.activeIsLoading)
    const editInProcess = useSelector(state => state.user.editInProcess)
    const roles = useSelector(state => state.user.roles)

    const [dirty, setDirty] = useState(false)

    const mainForm = useForm({defaultValues})
    const roleForm = useForm({defaultValues: {role: null}})

    useEffect(() => {
        if (user) {
            const userRights = getRights(user.rights)
            mainForm.reset(userUnpacking(user, userRights))
        } else {
            mainForm.reset(defaultValues)
            roleForm.reset({role: null})
        }
    }, [user, roles])

    useEffect(() => {
        const watcher = mainForm.watch(data => {
            const roleIndex = getRoleFromData(data, roles)
            roleForm.setValue('role', roleIndex)
            setDirty(mainForm.formState.isDirty)
        })

        return () => watcher.unsubscribe()
    }, [mainForm.watch, roles])


    const changeRole = e => {
        const newRoleIndex = e.target.value
        const newRoleRights = roles[newRoleIndex].rights

        mainForm.reset({
            ...defaultValues,
            user_login: user['login'],
            user_password: user['password'],
            is_banned: user['is_banned'] === 'true',
            ...newRoleRights
        })

        setDirty(mainForm.formState.isDirty)
    }


    const onSubmit = data => {
        storage.user.edit(userPacking(data, user))
    }
    const submit = () => {
        mainForm.handleSubmit(onSubmit)()
    }

    const onCancel = () => {
        storage.user.modalClose()
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