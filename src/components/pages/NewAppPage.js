import React from 'react';
import Page from "../ui/Page/Page";
import Button from "../ui/Button/Button";
import Layout from "../wrappers/Layout/Layout";
import NewApp from "../containers/NewApp/NewApp";

const NewAppPage = () => {
    return (
        <Layout fluid={true}>
            <Page.Box>
                <Page.Header>

                    <Page.Title>Добавить новое приложение</Page.Title>
                    <Page.Actions>
                        <Button>Все приложения</Button>
                    </Page.Actions>

                </Page.Header>

                <Page.Content padding={'fluid'}>

                    <NewApp/>

                </Page.Content>

            </Page.Box>
        </Layout>
    );
};

export default NewAppPage;