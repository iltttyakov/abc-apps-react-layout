import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Page from "../ui/Page/Page";
import Button from "../ui/Button/Button";
import Apps from "../containers/Apps";

const AppsPage = () => {
    return (
        <Layout>
            <Page.Box>
                <Page.Header>

                    <Page.Title>Приложения</Page.Title>
                    <Page.Actions>
                        <Button>Добавить новое приложение</Button>
                    </Page.Actions>

                </Page.Header>

                <Page.Content padding={false}>

                    <Apps/>

                </Page.Content>

            </Page.Box>
        </Layout>
    );
};

export default AppsPage;