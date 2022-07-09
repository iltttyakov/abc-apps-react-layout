import React, {useEffect} from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";
import Role from "../Role/Role";
import RadioButtonList from "../../ui/inputs/RadioButtonList/RadioButtonList";
import countries from "../../../helpers/countries";


const AppsManagerForm = ({form, onSubmit, isOpen = false}) => {
    const {handleSubmit, register, formState: {errors}, control} = form

    const buyers = useSelector(state => state.appManager.buyers)
    const tenants = useSelector(state => state.appManager.tenants)


    useEffect(() => {
        if (isOpen) {
            storage.appManager.getBuyers()
            storage.appManager.getTenants()
        }
    }, [isOpen])


    return (
        <Form.Box onSubmit={handleSubmit(onSubmit)}>

            <Form.Row>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'name'}
                                label={'Название'}
                                validation={{
                                    required: true
                                }}
                                disabled={true}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'accs_name'}
                                label={'Аккаунт'}
                                validation={{
                                    required: true
                                }}
                                disabled={true}
                            />
                        </Form.Field>
                    </Form.Fieldset>

                    <Form.Fieldset>
                        <Role accessTo={'streams_all'}>
                            <Form.Field width={FieldWidth.FULL}>
                                <div style={{marginRight: '50px', marginBottom: '10px'}}>
                                    <RadioButtonList
                                        name={'mode'}
                                        register={register}
                                        label={'Органика'}
                                        options={[
                                            {label: 'True', value: 'true'},
                                            {label: 'False', value: 'false'},
                                        ]}
                                    />
                                </div>
                            </Form.Field>
                        </Role>

                        <Role accessTo={'streams_all'}>
                            <Form.Field width={FieldWidth.FULL}>
                                <Form.Field width={FieldWidth.FULL}>
                                    <TextInput
                                        register={register}
                                        errors={errors}
                                        name={'link'}
                                        label={'Ссылка'}
                                    />
                                </Form.Field>
                            </Form.Field>
                        </Role>

                        <Form.Field width={FieldWidth.FULL}>
                            <SelectInput
                                label={'Покупатель'}
                                name={'buyer'}
                                control={control}
                                multiple={false}
                                options={[
                                    {label: 'Нет', value: '0'},
                                    ...buyers.map(buyer => ({label: buyer.login, value: buyer.id}))
                                ]}
                            />
                        </Form.Field>

                        <Form.Field width={FieldWidth.FULL}>
                            <SelectInput
                                label={'Арендаторы'}
                                name={'tenants'}
                                control={control}
                                multiple={true}
                                options={tenants.map(
                                    tenant => ({label: tenant.login, value: tenant.id})
                                )}
                            />
                        </Form.Field>

                        <Form.Field width={FieldWidth.FULL}>
                            <SelectInput
                                label={'Открытые страны'}
                                name={'countries'}
                                control={control}
                                multiple={true}
                                options={countries}
                            />
                        </Form.Field>
                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'af_login'}
                                label={'Логин AppsFlyer'}
                                disabled={true}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'af_password'}
                                label={'Пароль AppsFlyer'}
                                disabled={true}
                            />
                        </Form.Field>
                    </Form.Fieldset>

                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'fb_app_id'}
                                label={'Facebook ID'}
                                disabled={true}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'fb_app_access_token'}
                                label={'Install Referrer Key'}
                                disabled={true}
                            />
                        </Form.Field>
                    </Form.Fieldset>
                </Form.Column>

            </Form.Row>

        </Form.Box>
    );
};

export default AppsManagerForm;