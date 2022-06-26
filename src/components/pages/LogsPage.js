import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import LogsTable from "../containers/Logs/LogsTable";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const LogsPage = () => {
    useEffect(() => {
        setTitle('Логи')
        storage.auth.get()
    }, [])

    return (
        <Layout title={'Логи'}>
            <LogsTable/>
        </Layout>
    );
};

export default LogsPage;