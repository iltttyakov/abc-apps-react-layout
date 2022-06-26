import React, {useEffect} from 'react';
import LayoutFluid from "../sections/Layout/LayoutFluid";
import Button, {ButtonTypes} from "../ui/Button/Button";
import paths from "../paths";
import NotificationNew from "../containers/Notifications/NotificationNew";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const NotificationNewPage = () => {
    useEffect(() => {
        setTitle('Новое уведомление')
        storage.auth.get()
    }, [])

    return (
        <LayoutFluid
            title={'Добавить новое уведомление'}
            actions={
                <Button
                    type={ButtonTypes.STROKE}
                    to={paths.NotificationsPage}
                >
                    Все уведомления
                </Button>
            }
        >
            <NotificationNew/>
        </LayoutFluid>
    );
};

export default NotificationNewPage;