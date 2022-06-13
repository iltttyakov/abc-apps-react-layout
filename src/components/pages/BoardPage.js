import React from 'react';
import Layout from "../sections/Layout/Layout";
import Board from "../containers/Board";


const BoardPage = () => {
    return (
        <Layout
            title={'Доска'}
        >
            <Board/>
        </Layout>
    );
};

export default BoardPage;