import React from 'react';
import Layout from "../sections/Layout/Layout";
import AppsBuyerTable from "../containers/AppsBuyer/AppsBuyerTable";
import AppsBuyerModal from "../containers/AppsBuyer/AppsBuyerModal";


const AppsBuyerPage = () => {
    return (
        <Layout title={'Приложения'}>
            <AppsBuyerTable/>
            <AppsBuyerModal/>
        </Layout>
    );
};

export default AppsBuyerPage;