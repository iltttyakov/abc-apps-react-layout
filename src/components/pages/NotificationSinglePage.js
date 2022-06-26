import React, {useEffect} from 'react';
import LayoutFluid from "../sections/Layout/LayoutFluid";
import Button, {ButtonTypes} from "../ui/Button/Button";
import paths from "../paths";
import {useParams} from "react-router";
import NotificationSingle from "../containers/Notifications/NotificationSingle";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";

const NotificationSinglePage = () => {
    useEffect(() => {
        setTitle('Уведомление')
        storage.auth.get()
    }, [])
    const params = useParams()

    return (
            <NotificationSingle id={params.id}/>
    );
};

export default NotificationSinglePage;