import React, {useState} from 'react';
import Layout from "../wrappers/Layout/Layout";
import Page from "../ui/Page/Page";
import Button, {ButtonTypes} from "../ui/Button/Button";
import Modal from "../ui/Modal/Modal";
import NewUserForm from "../containers/Users/NewUserForm";
import Users from "../containers/Users/Users";


const UsersPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Layout>
                <Page.Box>

                    <Page.Header>
                        <Page.Title>Пользователи</Page.Title>
                        <Page.Actions>
                            <Button
                                type={ButtonTypes.FILL}
                                onClick={() => {
                                    setModalIsOpen(true)
                                }}
                            >
                                Добавить нового пользователя
                            </Button>
                        </Page.Actions>
                    </Page.Header>

                    <Users/>

                </Page.Box>
            </Layout>

            <Modal
                isOpen={modalIsOpen}
                onClose={() => {
                    setModalIsOpen(false)
                }}
                title={'Добавление нового пользователя'}
                size={'big'}
            >
                <NewUserForm/>
            </Modal>
        </>
    );
};

export default UsersPage;