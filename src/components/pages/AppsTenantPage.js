import React from 'react';
import Layout from "../sections/Layout/Layout";
import AppsTenantTable from "../containers/AppsTenant/AppsTenantTable";
import AppsTenantModal from "../containers/AppsTenant/AppsTenantModal";

const AppsTenantPage = () => {
    return (
        <Layout title={'Приложения'}>
            <AppsTenantTable/>
            <AppsTenantModal/>
        </Layout>
    );
};

export default AppsTenantPage;