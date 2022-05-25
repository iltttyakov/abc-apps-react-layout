import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Page from "../ui/Page/Page";
import Button, {ButtonTypes} from "../ui/Button/Button";
import Apps from "../containers/Apps/Apps";

const AppsPage = () => {
    return (
        <Layout>
            <Page.Box>
                <Page.Header>

                    <Page.Title>Приложения</Page.Title>
                    <Page.Actions>
                        <Button
                            type={ButtonTypes.FILL}
                            shadow={true}
                            to={'/apps/new'}
                        >
                            Добавить новое приложение
                        </Button>
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