import React from 'react';
import Layout from "../sections/Layout/Layout";
import TextPage from "../ui/TextPage/TextPage";
import documentation from "../../documentation";


const DocumentationPage = () => {
    return (
        <Layout title={'Документация'}>
            <TextPage text={documentation}/>
        </Layout>
    );
};

export default DocumentationPage;