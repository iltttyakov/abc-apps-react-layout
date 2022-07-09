import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import UsersTenantTable from "../containers/UsersTenant/UsersTenantTable";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";
import Button from "../ui/Button/Button";
import actions from "../../redux/rootActions";
import UsersTenantModal from "../containers/UsersTenant/UsersTenantModal";


const UsersTenantPage = () => {
    useEffect(() => {
        setTitle('Пользователи')
        storage.auth.get()
    }, [])

    return (
        <Layout
            title={'Пользователи'}
            actions={
                <Button onClick={actions.usersTenant.modalOpen}>
                    Добавить нового пользователя
                </Button>
            }
        >
            <UsersTenantTable/>
            <UsersTenantModal/>
        </Layout>
    );
};

export default UsersTenantPage;