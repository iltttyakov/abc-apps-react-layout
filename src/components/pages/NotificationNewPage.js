import React from 'react';
import LayoutFluid from "../sections/Layout/LayoutFluid";
import Container from "../ui/Container/Container";

import Button, {ButtonTypes} from "../ui/Button/Button";
import paths from "../paths";
import NotificationSingle from "../containers/Notifications/NotificationSingle";


const NotificationNewPage = () => {
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
            <NotificationSingle/>
        </LayoutFluid>
    );
};

export default NotificationNewPage;