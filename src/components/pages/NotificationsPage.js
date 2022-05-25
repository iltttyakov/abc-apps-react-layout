import React, {useState} from 'react';
import Layout from "../wrappers/Layout/Layout";
import Page from "../ui/Page/Page";
import Button, {ButtonTypes} from "../ui/Button/Button";
import Modal from "../ui/Modal/Modal";
import Form, {FieldWidth} from "../ui/Form/Form";
import TextInput from "../ui/inputs/TextInput/TextInput";
import {useForm} from "react-hook-form";
import DropDown from "../ui/inputs/DropDown/DropDown";
import Notifications from "../containers/Notifications/Notifications";


const NotificationsPage = () => {
    const [addNewModalIsOpen, setAddNewModalIsOpen] = useState(false)
    const {register, formState: {errors}} = useForm()

    return (
        <>

            <Layout>
                <Page.Box>

                    <Page.Header>
                        <Page.Title>
                            Уведомления
                        </Page.Title>
                        <Page.Actions>
                            <Button
                                type={ButtonTypes.FILL}
                                onClick={() => {
                                    setAddNewModalIsOpen(true)
                                }}
                            >
                                Добавить новое уведомление
                            </Button>
                        </Page.Actions>
                    </Page.Header>

                    <Notifications/>

                </Page.Box>
            </Layout>

            <Modal
                isOpen={addNewModalIsOpen}
                onClose={() => {
                    setAddNewModalIsOpen(false)
                }}
                title={'Добавление новой группы'}
            >
                <Form.Box>

                    <Form.Field width={FieldWidth.FULL}>
                        <TextInput
                            register={register}
                            // errors={errors['app-name-modal']}
                            name={'app-name-modal'}
                            label={'Название группы'}
                        />
                    </Form.Field>

                    <Form.Field width={FieldWidth.FULL}>
                        <DropDown
                            label={'Приложения'}
                            register={register}
                            name={'apps-modal'}
                            options={[
                                {label: 'App Name 2', value: 'app-name-1'},
                                {label: 'App Name 3', value: 'app-name-2'},
                                {label: 'App Name 4', value: 'app-name-3'},
                            ]}
                        />
                    </Form.Field>

                    <Form.Actions items={[
                        <Button type={ButtonTypes.FILL} shadow={true}>
                            Сохранить
                        </Button>,
                        <Button type={ButtonTypes.STROKE}>
                            Удалить
                        </Button>
                    ]}/>

                </Form.Box>
            </Modal>

        </>
    );
};

export default NotificationsPage;