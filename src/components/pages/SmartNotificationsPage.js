import React from 'react';
import Button from "../ui/Button/Button";
import paths from "../paths";
import Layout from "../sections/Layout/Layout";
import SmartNotificationsTable from "../containers/Notifications/SmartNotificationsTable";
import TabLinks from "../ui/TabLinks/TabLinks";

const SmartNotificationsPage = () => {
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
            <SmartNotificationsTable/>
        </Layout>
    );
};

export default SmartNotificationsPage;