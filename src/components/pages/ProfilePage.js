import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import Profile from "../containers/Profile/Profile";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const ProfilePage = () => {
    useEffect(() => {
        setTitle('Личный кабинет')
        storage.auth.get()
    }, [])

    return (
        <Layout>
            <Profile/>
        </Layout>
    );
};

export default ProfilePage;