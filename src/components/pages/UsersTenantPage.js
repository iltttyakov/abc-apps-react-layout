import React, {useEffect} from 'react';
import UsersTenantTable from "../containers/UsersTenant/UsersTenantTable";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";
import UsersTenantModal from "../containers/UsersTenant/UsersTenantModal";


const UsersTenantPage = () => {
    useEffect(() => {
        setTitle('Пользователи')
        storage.auth.get()
    }, [])

    return (
        <>
            <UsersTenantTable/>
            <UsersTenantModal/>
        </>
    );
};

export default UsersTenantPage;