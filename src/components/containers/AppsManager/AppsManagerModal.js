import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import storage from "../../../redux/rootActions";
import Modal, {ModalSizes} from "../../ui/Modal/Modal";
import AppsManagerForm from "./AppsManagerForm";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonTypes} from "../../ui/Button/Button";
import {unsavedExitConfirm} from "../../../helpers/swal";


const defaultValues = {
    id: '',
    name: '',
    accs_name: '',
    mode: 'false',
    link: '',
    buyer: '0',
    tenants: null,
    af_login: '',
    af_password: '',
    fb_app_id: '',
    fb_app_access_token: '',
    countries: '',
}

const appManagerUnpacking = app => {
    return app
        ? {
            ...defaultValues,
            ...app,
            tenants: app.tenants ? app.tenants.split(',') : '',
            countries: app.countries.split(','),
        }
        : defaultValues
}


const AppsManagerModal = () => {
    const app = useSelector(state => state.appManager.active)
    const modalIsOpen = useSelector(state => state.appManager.modalIsOpen)
    const appIsLoading = useSelector(state => state.appManager.activeIsLoading)
    const [dirty, setDirty] = useState(false)

    const form = useForm({defaultValues})

    useEffect(() => {
        form.reset(appManagerUnpacking(app))
    }, [app])

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])

    const reset = () => {
        form.reset(defaultValues)
    }

    const onSubmit = data => storage.appManager.edit(data, reset)
    const submit = () => form.handleSubmit(onSubmit)()

    const onCancel = () => {
        storage.appManager.modalClose()
        reset()
    }
    const cancel = () => {
        if (dirty) unsavedExitConfirm(onCancel)
        else onCancel()
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            title={'Приложение'}
            onClose={cancel}
            isLoading={appIsLoading}
            size={ModalSizes.BIG}
        >
            <AppsManagerForm
                form={form}
                onSubmit={onSubmit}
                isOpen={modalIsOpen}
            />
            <Actions
                items={[
                    <Button
                        shadow={false}
                        onClick={submit}
                    >
                        Сохранить
                    </Button>,
                    <Button
                        shadow={false}
                        onClick={cancel}
                        type={ButtonTypes.STROKE}
                    >
                        Отменить
                    </Button>
                ]}
            />
        </Modal>
    );
};

export default AppsManagerModal;