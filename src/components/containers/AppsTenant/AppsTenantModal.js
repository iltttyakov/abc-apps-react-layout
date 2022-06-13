import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import storage from "../../../redux/rootActions";
import Modal from "../../ui/Modal/Modal";
import AppsTenantForm from "./AppsTenantForm";


const defaultValues = {
    id: '',
    countries: ''
}

const appTenantUnpacking = app => {
    return app
        ? {
            ...defaultValues,
            ...app,
            countries: app.countries.split(','),
        }
        : defaultValues
}


const AppsTenantModal = () => {
    const app = useSelector(state => state.appTenant.active)
    const modalIsOpen = useSelector(state => state.appTenant.modalIsOpen)
    const appIsLoading = useSelector(state => state.appTenant.activeIsLoading)

    const form = useForm({defaultValues})

    useEffect(() => {
        form.reset(appTenantUnpacking(app))
    }, [app])

    const reset = () => {
        form.reset(defaultValues)
    }

    const onCancel = () => {
        storage.appTenant.modalClose()
        reset()
    }
    const cancel = () => {
        onCancel()
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            title={'Приложение'}
            onClose={cancel}
            isLoading={appIsLoading}
        >
            <AppsTenantForm form={form}/>
        </Modal>
    );
};

export default AppsTenantModal;