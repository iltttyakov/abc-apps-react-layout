import React from 'react';
import Page from "../ui/Page/Page";
import Button, {ButtonTypes} from "../ui/Button/Button";
import Apps from "../containers/Apps";
import Layout from "../wrappers/Layout/Layout";
import Accounts from "../containers/Accounts/Accounts";

const AccountsPage = () => {
    return (
        <Layout>
            <Page.Box>
                <Page.Header>

                    <Page.Title>Аккаунты</Page.Title>
                    <Page.Actions>
                        <Button
                            type={ButtonTypes.FILL}

                        >
                            Добавить новый аккаунт
                        </Button>
                    </Page.Actions>

                </Page.Header>

                <Page.Content padding={false}>

                    <Accounts/>

                </Page.Content>

            </Page.Box>
        </Layout>
    );
};

export default AccountsPage;