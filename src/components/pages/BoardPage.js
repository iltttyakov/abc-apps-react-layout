import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Board from "../containers/Board/Board";
import Page from "../ui/Page/Page";


const BoardPage = () => {
    return (
        <Layout>
            <Page.Box>

                <Page.Header>
                    <Page.Title>
                        Доска
                    </Page.Title>
                </Page.Header>

                <Board/>

            </Page.Box>
        </Layout>
    );
};

export default BoardPage;