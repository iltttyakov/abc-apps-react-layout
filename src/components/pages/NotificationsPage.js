import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import Button, {ButtonTypes} from "../ui/Button/Button";
import NotificationsTable from "../containers/Notifications/NotificationsTable";
import paths from "../paths";
import TabLinks from "../ui/TabLinks/TabLinks";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const NotificationsPage = () => {
    useEffect(() => {
        setTitle('Уведомления')
        storage.auth.get()
    }, [])

    return (
        <Layout
            title={'Уведомления'}
            actions={
                <Button to={paths.NotificationNewPage}>
                    Добавить новое уведомление
                </Button>
            }
        >
            <TabLinks
                options={[
                    {label: 'Уведомления', to: paths.NotificationsPage},
                    {label: 'Группы приложений', to: paths.GroupsPage, right: 'notifications_buyer'},
                    {label: 'Смарт', to: paths.SmartNotificationsPage},
                ]}
            />
            <NotificationsTable/>
        </Layout>
    );
};

export default NotificationsPage;