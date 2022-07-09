import React, {useEffect} from 'react';
import UserModal from "../containers/Users/UserModal";
import UsersTable from "../containers/Users/UsersTable";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const UsersPage = () => {
    useEffect(() => {
        setTitle('Пользователи')
        storage.auth.get()
    }, [])

    return (
        <>
            <UsersTable/>
            <UserModal/>
        </>
    );
};

export default UsersPage;