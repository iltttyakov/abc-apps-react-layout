import React from 'react';
import LayoutFluid from "../sections/Layout/LayoutFluid";
import Container from "../ui/Container/Container";

import Button, {ButtonTypes} from "../ui/Button/Button";
import paths from "../paths";
import {useParams} from "react-router";
import NotificationSingle from "../containers/Notifications/NotificationSingle";

const NotificationSinglePage = () => {
    const params = useParams()

    return (
        <LayoutFluid
            title={'Уведомление'}
            actions={
                <Button
                    type={ButtonTypes.STROKE}
                    to={paths.NotificationsPage}
                >
                    Все уведомления
                </Button>
            }
        >
            <NotificationSingle id={params.id}/>
        </LayoutFluid>
    );
};

export default NotificationSinglePage;