import React from 'react';
import Layout from "../sections/Layout/Layout";

import Button, {ButtonTypes} from "../ui/Button/Button";
import StreamsTable from "../containers/Streams/StreamsTable";
import storage from "../../redux/rootActions";
import StreamModal from "../containers/Streams/StreamModal";

const StreamsPage = () => {
    return (
        <Layout
            title={'Потоки'}
            actions={
                <Button onClick={storage.stream.modalOpen}>
                    Добавить новый поток
                </Button>
            }
        >
            <StreamsTable/>
            <StreamModal/>
        </Layout>
    );
};

export default StreamsPage;