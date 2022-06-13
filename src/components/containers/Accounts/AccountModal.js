import React, {useEffect, useState} from 'react';
import storage from "../../../redux/rootActions";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {deleteConfirm, unsavedExitConfirm} from "../../../helpers/swal";
import Modal, {ModalSizes} from "../../ui/Modal/Modal";
import AccountForm from "./AccountForm";
import inArray from "../../../helpers/inArray";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonTypes} from "../../ui/Button/Button";
import Role from "../Role/Role";


const defaultValues = {
    id: '',
    domain: '0',
    store: [],
    name: '',
    soft: 'dolphin',
    type: 'log',
    status: 'farm',
    login: '',
    password: '',
    proxy_host: '',
    proxy_port: '',
    proxy_login: '',
    proxy_password: '',
    note: ''
}

const accountUnpacking = account => {
    return account
        ? {
            ...defaultValues,
            ...account,
            store: account.store.split(',')
        }
        : defaultValues
}

const accountPacking = (data, account = {}) => {
    data['store'] = data.store ? data.store.join(',') : ''
    data['store_playMarket'] = data.store
        ? inArray(data.store, 'playMarket') ? '1' : null
        : null
    data['store_appStore'] = data.store
        ? inArray(data.store, 'playMarket') ? '1' : null
        : null
    data['store_huawei'] = data.store
        ? inArray(data.store, 'playMarket') ? '1' : null
        : null

    return {
        ...account,
        ...data,
    }
}


const AccountModal = () => {
    const account = useSelector(state => state.acc.active)
    const modalIsOpen = useSelector(state => state.acc.modalIsOpen)
    const accountIsLoading = useSelector(state => state.acc.activeIsLoading)
    const editInProcess = useSelector(state => state.acc.editInProcess)
    const [dirty, setDirty] = useState(false)

    const form = useForm({defaultValues: defaultValues})

    useEffect(() => {
        form.reset(accountUnpacking(account))
    }, [account])

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])


    const reset = () => {
        form.reset(defaultValues)
    }

    const onSubmit = data => storage.acc.edit(
        accountPacking(data, account),
        reset
    )
    const submit = () => form.handleSubmit(onSubmit)()

    const onCancel = () => {
        storage.acc.modalClose()
        reset()
    }
    const cancel = () => {
        if (dirty) unsavedExitConfirm(onCancel)
        else onCancel()
    }

    const del = () => {
        deleteConfirm(() => {
            storage.acc.del(account.id)
        })
    }


    return (
        <Modal
            title={account ? 'Изменение данных аккаунта' : 'Добавление нового аккаунта'}
            isOpen={modalIsOpen}
            onClose={cancel}
            size={ModalSizes.BIG}
            isLoading={accountIsLoading}
        >
            <AccountForm onSubmit={onSubmit} form={form}/>
            <Actions
                items={[
                    <Role accessTo={'accs_rw'}>
                        <Button
                            disabled={editInProcess}
                            onClick={submit}
                        >
                            {account ? 'Сохранить' : 'Создать'}
                        </Button>
                    </Role>,
                    account
                        ?
                        <Role accessTo={'accs_rw'}>
                            <Button
                                disabled={editInProcess}
                                onClick={del}
                                type={ButtonTypes.STROKE}
                            >
                                Удалить
                            </Button>
                        </Role>
                        : null,
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

export default AccountModal;