import React, {useEffect} from 'react';
import StreamsTable from "../containers/Streams/StreamsTable";
import StreamModal from "../containers/Streams/StreamModal";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const StreamsPage = () => {
    useEffect(() => {
        setTitle('Потоки')
        storage.auth.get()
    }, [])

    return (
        <>
            <StreamsTable/>
            <StreamModal/>
        </>
    );
};

export default StreamsPage;