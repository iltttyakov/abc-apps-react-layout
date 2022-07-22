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
import TableUI from "../../ui/Table/TableUI/TableUI";
import LayoutFluid from "../../sections/Layout/LayoutFluid";


const NotificationSingle = ({id}) => {
    const userId = useSelector(state => state.auth.id)
    const history = useHistory()
    const notification = useSelector(state => state.notification.active)
    const isLoading = useSelector(state => state.notification.activeIsLoading)
    const [dirty, setDirty] = useState(false)
    const [shouldCheckDirty, setShouldCheckDirty] = useState(true)
    const form = useForm({defaultValues: notificationDefaultValues})

    useEffect(() => {
        storage.notification.get(id)
    }, [])
    useEffect(() => {
        form.reset(notificationUnpacking(notification, userId))
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
        <LayoutFluid
            title={'Уведомление'}
            actions={
                <Button
                    type={ButtonTypes.STROKE}
                    to={
                        notification
                            ? notification.is_smart
                                ? paths.SmartNotificationsPage
                                : paths.NotificationsPage
                            : paths.NotificationsPage
                    }
                >
                    Все уведомления
                </Button>
            }
        >
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
                                notification.is_generator !== 'false'
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
                                notification.is_generator === 'false'
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
                        ? notification.statistics_total
                            ? <>
                                <p style={{
                                    marginTop: 70,
                                    fontWeight: 500,
                                    fontSize: 24,
                                    lineHeight: '29px',
                                }}>Общая статистика</p>
                                <TableUI.Table>
                                    <TableUI.Head>
                                        <TableUI.Row>
                                            <TableUI.HeadCell>Подписано</TableUI.HeadCell>
                                            <TableUI.HeadCell>Получено, %</TableUI.HeadCell>
                                            <TableUI.HeadCell>CTR, %</TableUI.HeadCell>
                                        </TableUI.Row>
                                    </TableUI.Head>
                                    <TableUI.Body>
                                        <TableUI.Row>
                                            <TableUI.Cell>{notification.statistics_total.converted_to_successful}</TableUI.Cell>
                                            <TableUI.Cell>{notification.statistics_total.successful_to_recipients}</TableUI.Cell>
                                            <TableUI.Cell>{notification.statistics_total.total_recipients}</TableUI.Cell>
                                        </TableUI.Row>
                                    </TableUI.Body>
                                </TableUI.Table>
                            </>
                            : null
                        : null
                }
                {
                    notification
                        ? notification.statistics_apps
                            ? <>
                                <p style={{
                                    marginTop: 70,
                                    fontWeight: 500,
                                    fontSize: 24,
                                    lineHeight: '29px',
                                }}>Статистика по приложениям</p>
                                <TableUI.Table>
                                    <TableUI.Head>
                                        <TableUI.Row>
                                            <TableUI.HeadCell>Название</TableUI.HeadCell>
                                            <TableUI.HeadCell>Аккаунт</TableUI.HeadCell>
                                            <TableUI.HeadCell>Подписано</TableUI.HeadCell>
                                            <TableUI.HeadCell>Получено, %</TableUI.HeadCell>
                                            <TableUI.HeadCell>CTR, %</TableUI.HeadCell>
                                        </TableUI.Row>
                                    </TableUI.Head>
                                    <TableUI.Body>
                                        {
                                            notification.statistics_apps.map((item, i) =>
                                                <TableUI.Row key={i}>
                                                    <TableUI.Cell>{item[0]}</TableUI.Cell>
                                                    <TableUI.Cell>{item[1]}</TableUI.Cell>
                                                    <TableUI.Cell>{item[2]}</TableUI.Cell>
                                                    <TableUI.Cell>{item[3]}</TableUI.Cell>
                                                    <TableUI.Cell>{item[4]}</TableUI.Cell>
                                                </TableUI.Row>
                                            )
                                        }

                                    </TableUI.Body>
                                </TableUI.Table>
                            </>
                            : null
                        : null
                }
                {
                    notification
                        ? notification.statistics_total_ctr
                            ? <p>Общий CTR по шаблону: {notification.statistics_total_ctr}</p>
                            : null
                        : null
                }
            </Loader>
        </LayoutFluid>
    );
};

export default NotificationSingle;