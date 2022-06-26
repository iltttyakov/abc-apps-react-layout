import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import TextPage from "../ui/TextPage/TextPage";
import documentation from "../../documentation";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const DocumentationPage = () => {
    useEffect(() => {
        setTitle('Документация')
        storage.auth.get()
    }, [])

    return (
        <Layout title={'Документация'}>
            <TextPage text={documentation}/>
        </Layout>
    );
};

export default DocumentationPage;