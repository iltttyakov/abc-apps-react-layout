import React from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import validatePassword from "../../../helpers/validatePassword";
import Checkbox from "../../ui/inputs/Checkbox/Checkbox";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import {useSelector} from "react-redux";


const UsersTenantForm = ({form, onSubmit}) => {
    const {handleSubmit, register, formState: {errors}, control, getValues, setValue, reset, watch} = form
    const organicAppsAll = useSelector(state => state.usersTenant.organicAppsAll)

    return (
        <Form.Box onSubmit={onSubmit}>

            <Form.Row>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'user_login'}
                                label={'Логин'}
                                validation={{
                                    required: true,
                                    minLength: 5,
                                    maxLength: 32,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'user_password'}
                                label={'Пароль'}
                                validation={{
                                    required: true,
                                    minLength: 8,
                                    maxLength: 32,
                                    validate: validatePassword
                                }}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                register={register}
                                name={'is_banned'}
                                label={'Бан'}
                                reverse={true}
                            />
                        </Form.Field>
                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>
                    <Form.Fieldset title={'Арендованные приложения'}>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'install_balance'}
                                label={'Баланс'}
                                disabled={true}
                                inputType={'number'}
                                placeholder={0}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'install_balance_add'}
                                label={'Пополнить'}
                                inputType={'number'}
                                placeholder={'Пополнить баланс'}
                                validation={{
                                    min: -999999999,
                                    max: 999999999,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <SelectInput
                                label={'Приложения с органикой'}
                                name={'organic_apps'}
                                control={control}
                                multiple={true}
                                options={
                                    Object.keys(organicAppsAll).length
                                        ? Object.keys(organicAppsAll).map(
                                            key => ({
                                                label: organicAppsAll[key], value: key
                                            })
                                        )
                                        : []
                                }
                            />
                        </Form.Field>
                    </Form.Fieldset>
                </Form.Column>

            </Form.Row>

        </Form.Box>
    );
};

export default UsersTenantForm;