import React from 'react';

import Button, {ButtonTypes} from "../ui/Button/Button";
import AppSingle from "../containers/Apps/AppSingle";
import LayoutFluid from "../sections/Layout/LayoutFluid";
import paths from "../paths";
import {useParams} from "react-router";


const AppSinglePage = () => {
    const params = useParams()

    return (
        <LayoutFluid
            title={'Приложение'}
            actions={
                <Button
                    type={ButtonTypes.STROKE}
                    to={paths.AppsPage}
                >
                    Все приложения
                </Button>
            }
        >

            <AppSingle id={params.id}/>

        </LayoutFluid>
    );
};

export default AppSinglePage;