import React, {useEffect} from 'react';
import LayoutFluid from "../sections/Layout/LayoutFluid";
import Button, {ButtonTypes} from "../ui/Button/Button";
import paths from "../paths";
import SmartNotificationNew from "../containers/Notifications/SmartNotificationNew";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const SmartNotificationNewPage = () => {
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
                    to={paths.SmartNotificationsPage}
                >
                    Все уведомления
                </Button>
            }
        >
            <SmartNotificationNew/>
        </LayoutFluid>
    );
};

export default SmartNotificationNewPage;