import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Page from "../ui/Page/Page";
import Logs from "../containers/Logs/Logs";

const LogsPage = () => {
    return (
        <Layout>
            <Page.Box>

                <Page.Header>
                    <Page.Title>
                        Логи
                    </Page.Title>
                </Page.Header>

                <Logs/>

            </Page.Box>
        </Layout>
    );
};

export default LogsPage;