import React from 'react';

import Button, {ButtonTypes} from "../ui/Button/Button";
import Layout from "../sections/Layout/Layout";
import DomainsTable from "../containers/Domains/DomainsTable";
import storage from "../../redux/rootActions";
import DomainModal from "../containers/Domains/DomainModal";

const DomainsPage = () => {
    return (
        <Layout
            title={'Домены'}
            actions={
                <Button onClick={storage.domain.modalOpen}>
                    Добавить новый домен
                </Button>
            }
        >
            <DomainsTable/>
            <DomainModal/>
        </Layout>
    );
};

export default DomainsPage;