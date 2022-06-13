import React from 'react';
import Layout from "../sections/Layout/Layout";

import Button, {ButtonTypes} from "../ui/Button/Button";
import AppsTable from "../containers/Apps/AppsTable";
import paths from "../paths";
import Role from "../containers/Role/Role";


const AppsPage = () => {
    return (
        <Layout
            title={'Приложения'}
            actions={
                <Role accessTo={'apps_add'}>
                    <Button to={paths.NewAppPage}>
                        Добавить новое приложение
                    </Button>
                </Role>
            }
        >
            <AppsTable/>
        </Layout>
    );
};

export default AppsPage;