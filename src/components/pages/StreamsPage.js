import React from 'react';
import Layout from "../wrappers/Layout/Layout";
import Page from "../ui/Page/Page";
import Button, {ButtonTypes} from "../ui/Button/Button";
import Streams from "../containers/Streams/Streams";

const StreamsPage = () => {
    return (
        <Layout>
            <Page.Box>

                <Page.Header>
                    <Page.Title>
                        Потоки
                    </Page.Title>
                    <Page.Actions>
                        <Button type={ButtonTypes.FILL}>
                            Добавить новый поток
                        </Button>
                    </Page.Actions>
                </Page.Header>


                <Streams/>


            </Page.Box>
        </Layout>
    );
};

export default StreamsPage;