import React from 'react';
import paths from "../paths";

import Button, {ButtonTypes} from "../ui/Button/Button";
import AppNew from "../containers/Apps/AppNew";
import LayoutFluid from "../sections/Layout/LayoutFluid";


const AppNewPage = () => {
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