import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {deleteConfirm, unsavedExitConfirm} from "../../../helpers/swal";
import storage from "../../../redux/rootActions";
import Modal from "../../ui/Modal/Modal";
import DomainForm from "./DomainForm";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonTypes} from "../../ui/Button/Button";


const defaultValues = {
    id: '',
    domain: '',
    account: '0'
}

const domainUnpacking = domain => {
    return domain
        ? {
            ...defaultValues,
            ...domain,
            account: domain['accs_id'] ? domain['accs_id'] : '0'
        }
        : defaultValues
}


const DomainModal = () => {
    const domain = useSelector(state => state.domain.active)
    const modalIsOpen = useSelector(state => state.domain.modalIsOpen)
    const domainIsLoading = useSelector(state => state.domain.activeIsLoading)
    const editInProcess = useSelector(state => state.domain.editInProcess)
    const [dirty, setDirty] = useState(false)

    const form = useForm({defaultValues})

    useEffect(() => {
        form.reset(domainUnpacking(domain))
    }, [domain])

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])


    const reset = () => {
        form.reset(defaultValues)
    }

    const onSubmit = data => storage.domain.edit(data, reset)
    const submit = () => form.handleSubmit(onSubmit)()

    const onCancel = () => {
        storage.domain.modalClose()
        reset()
    }
    const cancel = () => {
        if (dirty) unsavedExitConfirm(onCancel)
        else onCancel()
    }

    const del = () => {
        deleteConfirm(() => {
            storage.domain.del(domain.id)
        })
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            title={domain ? 'Изменение данных домена' : 'Добавление нового домена'}
            onClose={cancel}
            isLoading={domainIsLoading}
        >
            <DomainForm form={form} onSubmit={onSubmit}/>
            <Actions
                items={[
                    <Button
                        disabled={editInProcess}
                        onClick={submit}
                    >
                        {domain ? 'Сохранить' : 'Создать'}
                    </Button>,
                    domain
                        ? <Button
                            disabled={editInProcess}
                            onClick={del}
                            type={ButtonTypes.STROKE}
                            shadow={false}
                        >
                            Удалить
                        </Button>
                        : null,
                    <Button
                        onClick={cancel}
                        type={ButtonTypes.STROKE}
                        shadow={false}
                    >
                        Отменить
                    </Button>,
                ]}
            />
        </Modal>
    );
};

export default DomainModal;