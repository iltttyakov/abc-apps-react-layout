import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import AppsTenantTable from "../containers/AppsTenant/AppsTenantTable";
import AppsTenantModal from "../containers/AppsTenant/AppsTenantModal";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";

const AppsTenantPage = () => {
    useEffect(() => {
        setTitle('Приложения')
        storage.auth.get()
    }, [])

    return (
        <Layout title={'Приложения'}>
            <AppsTenantTable/>
            <AppsTenantModal/>
        </Layout>
    );
};

export default AppsTenantPage;