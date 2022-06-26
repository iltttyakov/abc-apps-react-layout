import React, {useEffect} from 'react';
import Layout from "../sections/Layout/Layout";
import Board from "../containers/Board";
import setTitle from "../../helpers/seo";
import {useSelector} from "react-redux";
import accessCheck from "../../helpers/accessCheck";
import storage from "../../redux/rootActions";


const BoardPage = () => {
    const userRights = useSelector(state => state.auth.rights)
    useEffect(() => {
        setTitle('Доска')
        storage.auth.get()
    }, [])

    return (
        accessCheck(userRights, 'board_rw')
            ? <Layout title={'Доска'}><Board/></Layout>
            : <Layout title={''}>
                <p style={{padding: '20px 20px'}}>Доступ к данной странице для текущего пользователя ограничен</p>
            </Layout>
    );
};

export default BoardPage;