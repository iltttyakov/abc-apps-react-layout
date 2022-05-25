import React from 'react';
import Page from "../ui/Page/Page";
import Button, {ButtonTypes} from "../ui/Button/Button";
import NewApp from "../containers/NewApp/NewApp";
import LayoutFluid from "../wrappers/Layout/LayoutFluid";

const NewAppPage = () => {
    return (
        <LayoutFluid>
            <Page.Box>

                <Page.Header padding={false}>
                    <Page.Title>Добавить новое приложение</Page.Title>
                    <Page.Actions>
                        <Button
                            type={ButtonTypes.STROKE}
                            to={'/apps'}
                        >
                            Все приложения
                        </Button>
                    </Page.Actions>
                </Page.Header>

                <NewApp/>

            </Page.Box>
        </LayoutFluid>
    );
};

export default NewAppPage;