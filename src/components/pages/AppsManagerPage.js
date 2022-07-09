import React, {useEffect} from 'react';
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";
import Layout from "../sections/Layout/Layout";
import AppsManagerTable from "../containers/AppsManager/AppsManagerTable";
import AppsManagerModal from "../containers/AppsManager/AppsManagerModal";


const AppsManagerPage = () => {
    useEffect(() => {
        setTitle('Приложения')
        storage.auth.get()
    }, [])

    return (
        <Layout title={'Приложения'}>
            <AppsManagerTable/>
            <AppsManagerModal/>
        </Layout>
    );
};

export default AppsManagerPage;