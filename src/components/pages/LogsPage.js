import React from 'react';
import Layout from "../sections/Layout/Layout";
import LogsTable from "../containers/Logs/LogsTable";


const LogsPage = () => {
    return (
        <Layout title={'Логи'}>
            <LogsTable/>
        </Layout>
    );
};

export default LogsPage;