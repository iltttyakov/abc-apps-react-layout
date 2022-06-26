import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import Button, {ButtonTypes} from "../ui/Button/Button";
import UserModal from "../containers/Users/UserModal";
import UsersTable from "../containers/Users/UsersTable";
import actions from "../../redux/rootActions";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const UsersPage = () => {
    useEffect(() => {
        setTitle('Пользователи')
        storage.auth.get()
    }, [])

    return (
        <Layout
            title={'Пользователи'}
            actions={
                <Button onClick={actions.user.modalOpen}>
                    Добавить нового пользователя
                </Button>
            }
        >
            <UsersTable/>
            <UserModal/>
        </Layout>
    );
};

export default UsersPage;