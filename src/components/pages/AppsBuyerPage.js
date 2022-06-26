import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import AppsBuyerTable from "../containers/AppsBuyer/AppsBuyerTable";
import AppsBuyerModal from "../containers/AppsBuyer/AppsBuyerModal";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const AppsBuyerPage = () => {
    useEffect(() => {
        setTitle('Приложения')
        storage.auth.get()
    }, [])

    return (
        <Layout title={'Приложения'}>
            <AppsBuyerTable/>
            <AppsBuyerModal/>
        </Layout>
    );
};

export default AppsBuyerPage;