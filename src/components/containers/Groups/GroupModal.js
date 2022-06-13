import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import storage from "../../../redux/rootActions";
import {deleteConfirm, unsavedExitConfirm} from "../../../helpers/swal";
import Modal from "../../ui/Modal/Modal";
import GroupForm from "./GroupForm";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonTypes} from "../../ui/Button/Button";


const defaultValues = {
    id: '',
    name: '',
    apps: []
}

const groupUnpacking = group => {
    return group
        ? {
            ...defaultValues,
            ...group,
        }
        : defaultValues
}


const GroupModal = () => {
    const group = useSelector(state => state.group.active)
    const modalIsOpen = useSelector(state => state.group.modalIsOpen)
    const groupIsLoading = useSelector(state => state.group.activeIsLoading)
    const editInProcess = useSelector(state => state.group.editInProcess)
    const [dirty, setDirty] = useState(false)

    const form = useForm({defaultValues})

    useEffect(() => {
        form.reset(groupUnpacking(group))
    }, [group])

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])

    const onSubmit = data => storage.group.edit(data)
    const submit = () => form.handleSubmit(onSubmit)()

    const close = () => {
        storage.group.modalClose()
        form.reset(defaultValues)
    }

    const cancel = () => {
        if (dirty) unsavedExitConfirm(close)
        else close()
    }

    const del = () => {
        deleteConfirm(() => {
            storage.group.del(group.id)
        })
    }


    return (
        <Modal
            isOpen={modalIsOpen}
            title={group ? 'Изменение данных домена' : 'Добавление нового домена'}
            onClose={cancel}
            isLoading={groupIsLoading}
        >
            <GroupForm form={form} onSubmit={onSubmit}/>
            <Actions
                items={[
                    <Button
                        disabled={editInProcess}
                        onClick={submit}
                    >
                        {group ? 'Сохранить' : 'Создать'}
                    </Button>,
                    group
                        ? <Button
                            disabled={editInProcess}
                            onClick={del}
                            type={ButtonTypes.STROKE}
                        >
                            Удалить
                        </Button>
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

export default GroupModal;