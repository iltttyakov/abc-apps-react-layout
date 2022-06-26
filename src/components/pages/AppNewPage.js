import React, {useEffect} from 'react';
import paths from "../paths";
import Button, {ButtonTypes} from "../ui/Button/Button";
import AppNew from "../containers/Apps/AppNew";
import LayoutFluid from "../sections/Layout/LayoutFluid";
import setTitle from "../../helpers/seo";
import storage from "../../redux/rootActions";


const AppNewPage = () => {
    useEffect(() => {
        setTitle('Новое приложение')
        storage.auth.get()
    }, [])

    return (
        <LayoutFluid
            title={'Добавить новое приложение'}
            actions={
                <Button
                    type={ButtonTypes.STROKE}
                    to={paths.AppsPage}
                >
                    Все приложения
                </Button>
            }
        >
            <AppNew/>
        </LayoutFluid>
    );
};

export default AppNewPage;