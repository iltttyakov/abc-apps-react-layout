import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {deleteConfirm, unsavedExitConfirm} from "../../../helpers/swal";
import storage from "../../../redux/rootActions";
import Modal from "../../ui/Modal/Modal";
import StreamForm from "./StreamForm";
import Button, {ButtonTypes} from "../../ui/Button/Button";
import Actions from "../../ui/Actions/Actions";


const defaultValues = {
    id: '',
    link: '',
    offer: ''
}


const StreamModal = () => {
    const userId = useSelector(state => state.auth.id)
    const stream = useSelector(state => state.stream.active)
    const modalIsOpen = useSelector(state => state.stream.modalIsOpen)
    const streamIsLoading = useSelector(state => state.stream.activeIsLoading)
    const editInProcess = useSelector(state => state.stream.editInProcess)
    const [dirty, setDirty] = useState(false)

    const form = useForm({defaultValues})

    const streamUnpacking = stream => {
        return stream
            ? {
                ...defaultValues,
                ...stream
            }
            : {
                owner: userId,
                ...defaultValues
            }
    }

    useEffect(() => {
        form.reset(streamUnpacking(stream))
    }, [stream])

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])


    const reset = () => {
        form.reset(defaultValues)
    }

    const onSubmit = data => {
        storage.stream.edit(data, reset)
    }
    const submit = () => form.handleSubmit(onSubmit)()

    const onCancel = () => {
        storage.stream.modalClose()
        reset()
    }
    const cancel = () => {
        if (dirty) unsavedExitConfirm(onCancel)
        else onCancel()
    }

    const del = () => {
        deleteConfirm(() => {
            storage.stream.del(stream.id)
        })
    }


    return (
        <Modal
            isOpen={modalIsOpen}
            title={stream ? 'Изменение данных потока' : 'Добавление нового потока'}
            onClose={cancel}
            isLoading={streamIsLoading}
        >
            <StreamForm
                form={form}
                onSubmit={onSubmit}
                isOpen={modalIsOpen}
            />

            <Actions
                items={[
                    <Button
                        disabled={editInProcess}
                        onClick={submit}
                    >
                        {stream ? 'Сохранить' : 'Создать'}
                    </Button>,
                    stream
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

export default StreamModal;