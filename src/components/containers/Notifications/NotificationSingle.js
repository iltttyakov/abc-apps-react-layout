import React, {useEffect, useState} from 'react';
import NotificationForm from "./NotificationForm";
import actions from "../../../redux/rootActions";
import {useSelector} from "react-redux";
import Loader from "../../ui/Loader/Loader";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonSizes, ButtonTypes} from "../../ui/Button/Button";
import {useForm} from "react-hook-form";
import storage from "../../../redux/rootActions";
import paths from "../../paths";
import {cancelConfirm, deleteConfirm} from "../../../helpers/swal";
import {useHistory} from "react-router";
import {notificationPackaging, notificationUnpacking, notificationDefaultValues} from "./notificationData";
import {Prompt} from "react-router-dom";
import SmartNotificationForm from "./SmartNotificationForm";


const NotificationSingle = ({id}) => {
    const history = useHistory()
    const notification = useSelector(state => state.notification.active)
    const isLoading = useSelector(state => state.notification.activeIsLoading)
    const [dirty, setDirty] = useState(false)
    const [shouldCheckDirty, setShouldCheckDirty] = useState(true)
    const form = useForm({defaultValues: notificationDefaultValues})

    useEffect(() => storage.notification.get(id), [])
    useEffect(() => {
        form.reset(notificationUnpacking(notification))
        console.log(notification)
    }, [notification])

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])

    const onSubmit = data => {
        storage.notification.edit(
            notificationPackaging(data, notification),
            data.image[0],
            () => history.push(paths.NotificationsPage)
        )
    }
    const submit = () => {
        setShouldCheckDirty(false)
        form.handleSubmit(onSubmit)()
    }

    const notificationCancel = () => {
        cancelConfirm(() => {
            storage.notification.cancel(notification.id)
            history.push(paths.NotificationsPage)
        })
    }

    const disableAndCreateNew = () => {
        const data = notificationPackaging({}, notification)
        delete data['settings_active']
        storage.notification.edit(
            data,
            null,
            () => history.push(paths.NotificationNewPage)
        )
    }

    const del = () => {
        deleteConfirm(() => {
            setShouldCheckDirty(false)
            storage.notification.del(notification.id)
            history.push(paths.NotificationsPage)
        })
    }

    return (
        <Loader process={isLoading}>
            <Prompt
                when={dirty && shouldCheckDirty}
                message={'На странице есть несохраненные данные, выйти без сохранения?'}
            />
            {
                notification
                    ? notification.is_smart
                        ? <SmartNotificationForm
                            form={form}
                            notification={notification}
                            onSubmit={onSubmit}
                        />
                        : <NotificationForm
                            form={form}
                            notification={notification}
                            onSubmit={onSubmit}
                        />
                    : null
            }
            <Actions
                align={'center'}
                items={[
                    <Button
                        type={ButtonTypes.STROKE}
                        size={ButtonSizes.BIG}
                        buttonType={'button'}
                        onClick={del}
                    >
                        Удалить
                    </Button>,
                    notification
                        ? (
                            notification.was_sent != null &&
                            notification.generator !== '0'
                        )
                            ? <Button
                                type={ButtonTypes.STROKE}
                                size={ButtonSizes.BIG}
                                buttonType={'button'}
                                onClick={disableAndCreateNew}
                            >
                                Создать новый шаблон и отключить текущий
                            </Button>
                            : <Button
                                type={ButtonTypes.FILL}
                                size={ButtonSizes.BIG}
                                buttonType={'button'}
                                onClick={submit}
                            >
                                Сохранить
                            </Button>
                        : null,
                    notification
                        ? (
                            notification.was_sent != null &&
                            notification.repeat_period === 'once' &&
                            notification.settings_timezone === '1' &&
                            notification.cancelled === '0'
                        )
                            ? <Button
                                type={ButtonTypes.STROKE}
                                size={ButtonSizes.BIG}
                                buttonType={'button'}
                                onClick={notificationCancel}
                            >
                                Отменить
                            </Button>
                            : null
                        : null,
                    notification
                        ? (
                            notification.was_sent !== null &&
                            notification.statistics_csv &&
                            notification.generator === '0'
                        )
                            ? <Button
                                type={ButtonTypes.STROKE}
                                size={ButtonSizes.BIG}
                                buttonType={'button'}
                                onClick={() => {
                                    storage.notification.statistics(notification.id)
                                }}
                            >
                                Статистика
                            </Button>
                            : null
                        : null

                ]}
            />
            {
                notification
                    ? notification.statistics_total_ctr
                        ? <p>Общий CTR по шаблону: {notification.statistics_total_ctr}</p>
                        : null
                    : null
            }
        </Loader>
    );
};

export default NotificationSingle;