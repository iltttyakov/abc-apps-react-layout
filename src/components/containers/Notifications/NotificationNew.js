import React, {useEffect, useState} from 'react';
import NotificationForm from "./NotificationForm";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonSizes, ButtonTypes} from "../../ui/Button/Button";
import {useForm} from "react-hook-form";
import storage from "../../../redux/rootActions";
import paths from "../../paths";
import {useHistory} from "react-router";
import {notificationPackaging, notificationDefaultValues} from "./notificationData";
import {Prompt} from "react-router-dom";
import {useSelector} from "react-redux";


const NotificationNew = () => {
    const userId = useSelector(state => state.auth.id)
    const history = useHistory()
    const [dirty, setDirty] = useState(false)
    const [shouldCheckDirty, setShouldCheckDirty] = useState(true)
    const form = useForm({
        defaultValues: {
            owner: userId,
            ...notificationDefaultValues
        }
    })

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])

    const onSubmit = data => {
        storage.notification.edit(
            notificationPackaging({
                is_smart: 'false',
                ...data
            }),
            data.image[0],
            () => history.push(paths.NotificationsPage)
        )
    }
    const submit = () => {
        setShouldCheckDirty(false)
        form.handleSubmit(onSubmit)()
    }

    return (
        <>
            <Prompt
                when={dirty && shouldCheckDirty}
                message={'На странице есть несохраненные данные, выйти без сохранения?'}
            />

            <NotificationForm
                form={form}
                onSubmit={onSubmit}
            />
            <Actions
                align={'center'}
                items={[
                    <Button
                        type={ButtonTypes.FILL}
                        size={ButtonSizes.BIG}
                        buttonType={'button'}
                        onClick={submit}
                    >
                        Сохранить
                    </Button>,
                ]}
            />
        </>
    );
};

export default NotificationNew;