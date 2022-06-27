import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import setTitle from "../../helpers/seo";


const NotFoundPage = () => {
    useEffect(() => {
        setTitle('404')
    }, [])

    return (
        <Layout title={'Страница не найдена'}></Layout>
    );
};

export default NotFoundPage;