import React, {useEffect} from 'react';

import Button, {ButtonTypes} from "../ui/Button/Button";
import Layout from "../sections/Layout/Layout";
import AccountsTable from "../containers/Accounts/AccountsTable";
import storage from "../../redux/rootActions";
import AccountModal from "../containers/Accounts/AccountModal";
import Role from "../containers/Role/Role";
import setTitle from "../../helpers/seo";

const AccountsPage = () => {

    useEffect(() => {
        setTitle('Аккаунты')
        storage.auth.get()
    }, [])

    return (
        <Layout
            title={'Аккаунты'}
            actions={
                <Role accessTo={'accs_add'}>
                    <Button
                        type={ButtonTypes.FILL}
                        shadow={true}
                        onClick={storage.acc.modalOpen}
                    >
                        Добавить новый аккаунт
                    </Button>
                </Role>
            }
        >

            <AccountsTable/>
            <AccountModal/>

        </Layout>
    );
};

export default AccountsPage;