import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import storage from "../../../redux/rootActions";
import {unsavedExitConfirm} from "../../../helpers/swal";
import Modal from "../../ui/Modal/Modal";
import AppsBuyerForm from "./AppsBuyerForm";
import Actions from "../../ui/Actions/Actions";
import Button from "../../ui/Button/Button";


const defaultValues = {
    id: '',
    countries: ''
}

const appBuyerUnpacking = app => {
    return app
        ? {
            ...defaultValues,
            ...app,
            countries: app.countries.split(','),
        }
        : defaultValues
}


const AppsBuyerModal = () => {
    const app = useSelector(state => state.appBuyer.active)
    const modalIsOpen = useSelector(state => state.appBuyer.modalIsOpen)
    const appIsLoading = useSelector(state => state.appBuyer.activeIsLoading)
    const editInProcess = useSelector(state => state.appBuyer.editInProcess)
    const [dirty, setDirty] = useState(false)

    const form = useForm({defaultValues})

    useEffect(() => {
        form.reset(appBuyerUnpacking(app))
    }, [app])

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])


    const reset = () => {
        form.reset(defaultValues)
    }

    const onSubmit = data => storage.appBuyer.edit(data, reset)
    const submit = () => form.handleSubmit(onSubmit)()

    const onCancel = () => {
        storage.appBuyer.modalClose()
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
        >
            <AppsBuyerForm form={form} onSubmit={onSubmit}/>
            <Actions
                items={[
                    <Button
                        shadow={false}
                        onClick={submit}
                    >
                        Сохранить
                    </Button>
                ]}
            />
        </Modal>
    );
};

export default AppsBuyerModal;