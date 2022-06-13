import React from 'react';
import Layout from "../sections/Layout/Layout";
import Button, {ButtonTypes} from "../ui/Button/Button";
import GroupsTable from "../containers/Groups/GroupsTable";
import GroupModal from "../containers/Groups/GroupModal";
import actions from "../../redux/rootActions";
import TabLinks from "../ui/TabLinks/TabLinks";
import paths from "../paths";


const GroupsPage = () => {
    return (
        <Layout
            title={'Уведомления'}
            actions={
                <Button onClick={actions.group.modalOpen}>
                    Добавить новую группу
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
            <GroupsTable/>
            <GroupModal/>
        </Layout>
    );
};

export default GroupsPage;