import React, {useEffect} from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import Checkbox from "../../ui/inputs/Checkbox/Checkbox";
import CheckedTagList from "../../ui/inputs/CheckedTagList/CheckedTagList";
import RadioButtonList from "../../ui/inputs/RadioButtonList/RadioButtonList";
import CheckboxList, {CheckboxListDirection, CheckboxListLabelSize} from "../../ui/inputs/CheckboxList/CheckboxList";
import validatePassword from "../../../helpers/validatePassword";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import {useSelector} from "react-redux";
import rootActions from "../../../redux/rootActions";


const UserForm = ({form, onSubmit, roleForm, changeRole, isOpen = false}) => {
    const {handleSubmit, register, formState: {errors}, control, getValues, setValue, reset, watch} = form
    const organicAppsAll = useSelector(state => state.user.organicAppsAll)
    const roles = useSelector(state => state.user.roles)

    useEffect(() => {
        if (isOpen) rootActions.user.getRoles()
    }, [isOpen])

    return (
        <Form.Box onSubmit={handleSubmit(onSubmit)}>

            <Form.Row>

                <Form.Column>
                    <Form.Fieldset style={{paddingBottom: 85}}>
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
                        <Form.Field width={FieldWidth.FULL} style={{marginBottom: '30px'}}>
                            <Checkbox
                                register={register}
                                name={'is_banned'}
                                label={'Бан'}
                                reverse={true}
                            />
                        </Form.Field>
                        <CheckedTagList
                            name={'role'}
                            register={roleForm.register}
                            options={
                                roles.map(
                                    (role, index) => {
                                        return {label: role.role, value: index}
                                    })
                            }
                            onClick={changeRole}
                        />
                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>

                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'board'}
                                options={[
                                    {label: 'Недоступны', value: 'board_no'},
                                    {label: 'Доступно', value: 'board_rw'},
                                ]}
                                register={register}
                                label={'Доска'}
                                errors={errors}
                                validation={{
                                    required: true
                                }}
                            />
                        </Form.Field>
                        <CheckboxList
                            register={register}
                            options={[
                                {
                                    label: 'Скрытие',
                                    name: 'board_del', value: '1',
                                    disable: watch('board') === 'board_no'
                                },
                                {
                                    label: 'Восстановление',
                                    name: 'board_add', value: '1',
                                    disable: watch('board') === 'board_no'
                                },
                            ]}
                        />
                    </Form.Fieldset>

                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'streams'}
                                options={[
                                    {label: 'Недоступны', value: 'streams_no'},
                                    {label: 'Свои', value: 'streams_own'},
                                    {label: 'Все', value: 'streams_all'},
                                ]}
                                register={register}
                                label={'Потоки'}
                                errors={errors}
                                validation={{
                                    required: true
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <Checkbox
                                register={register}
                                name={'streams_own_buyer_tenant'}
                                label={'Только свои, покупателей и арендаторов'}
                                value={'1'}
                                disabled={watch('streams') !== 'streams_all'}
                            />
                        </Form.Field>
                        <CheckboxList
                            register={register}
                            options={[
                                {
                                    label: 'Покупателя',
                                    name: 'streams_apps_buyer', value: '1',
                                    disable: watch('streams') === 'streams_no'
                                },
                                {

                                    label: 'Арендатора',
                                    name: 'streams_apps_tenant', value: '1',
                                    disable: watch('streams') === 'streams_no'
                                },
                            ]}
                            label={'Только приложения:'}
                            labelSize={CheckboxListLabelSize.SMALL}
                        />
                        <Form.Field>
                            <Checkbox
                                register={register}
                                name={'streams_default'}
                                label={'Создание дефолтных потоков'}
                                value={'1'}
                            />
                        </Form.Field>
                        <Checkbox
                            register={register}
                            name={'streams_owner'}
                            label={'Можно выбрать владельцем'}
                            value={'1'}
                        />
                    </Form.Fieldset>

                </Form.Column>

            </Form.Row>


            <Form.Row>

                <Form.Column>

                    <Form.Fieldset title={'Приложения'}>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                register={register}
                                errors={errors}
                                name={'grey'}
                                options={[
                                    {label: 'Недоступны', value: 'grey_no'},
                                    {label: 'Чтение', value: 'grey_r'},
                                    {label: 'Изменение', value: 'grey_rw'},
                                ]}
                                label={'Серые:'}
                                labelPosition={'left'}
                                validation={{
                                    required: true
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                register={register}
                                errors={errors}
                                name={'white'}
                                options={[
                                    {label: 'Недоступны', value: 'white_no'},
                                    {label: 'Чтение', value: 'white_r'},
                                    {label: 'Изменение', value: 'white_rw'},
                                ]}
                                label={'Белые:'}
                                labelPosition={'left'}
                                validation={{
                                    required: true
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL} style={{marginBottom: '0'}}>
                            <CheckboxList
                                register={register}
                                options={[
                                    {
                                        label: 'Добавление',
                                        name: 'apps_add', value: '1',
                                        disable: !(watch('white') === 'white_rw' || watch('grey') === 'grey_rw')
                                    },
                                    {
                                        label: 'Удаление',
                                        name: 'apps_del', value: '1',
                                        disable: !(watch('white') === 'white_rw' || watch('grey') === 'grey_rw')
                                    },
                                ]}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <Checkbox
                                register={register}
                                label={'Поля Покупатель и Арендаторы'}
                                name={'apps_rw_buyer'}
                                value={'1'}
                                disabled={watch('white') === 'white_no' && watch('grey') === 'grey_no'}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL} style={{marginBottom: '13px'}}>
                            <CheckboxList
                                register={register}
                                name={'store'}
                                options={[
                                    {
                                        label: 'Play Market',
                                        name: 'apps_playMarket', value: '1',
                                        disable: watch('white') === 'white_no' && watch('grey') === 'grey_no'
                                    },
                                    {
                                        label: 'App Store',
                                        name: 'apps_appStore', value: '1',
                                        disable: watch('white') === 'white_no' && watch('grey') === 'grey_no'
                                    },
                                    {
                                        label: 'Huawei',
                                        name: 'apps_huawei', value: '1',
                                        disable: watch('white') === 'white_no' && watch('grey') === 'grey_no'
                                    },
                                ]}
                            />
                        </Form.Field>
                        <CheckboxList
                            register={register}
                            label={'Можно выбрать'}
                            options={[
                                {
                                    label: 'Покупателям',
                                    name: 'apps_list_buyer', value: '1'
                                },
                                {
                                    label: 'Арендатором',
                                    name: 'apps_list_tenant', value: '1'
                                },
                            ]}
                        />
                    </Form.Fieldset>

                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                register={register}
                                name={'accs'}
                                label={'Аккаунты'}
                                options={[
                                    {label: 'Недоступны', value: 'accs_no'},
                                    {label: 'Чтение', value: 'accs_r'},
                                    {label: 'Изменение', value: 'accs_rw'},
                                ]}
                                errors={errors}
                                validation={{
                                    required: true
                                }}
                            />
                        </Form.Field>
                        <CheckboxList
                            register={register}
                            options={[
                                {
                                    label: 'Добавление',
                                    name: 'accs_add', value: '1',
                                    disable: watch('accs') !== 'accs_rw'
                                },
                                {
                                    label: 'Удаление',
                                    name: 'accs_del', value: '1',
                                    disable: watch('accs') !== 'accs_rw'
                                },
                            ]}
                        />
                    </Form.Fieldset>

                </Form.Column>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'notifications'}
                                label={'Уведомления'}
                                options={[
                                    {label: 'Недоступны', value: 'notifications_no'},
                                    {label: 'Свои', value: 'notifications_own'},
                                    {label: 'Все', value: 'notifications_all'},
                                ]}
                                register={register}
                                errors={errors}
                                validation={{
                                    required: true
                                }}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                register={register}
                                name={'notifications_buyer'}
                                label={'Интерфейс покупателя'}
                                disabled={watch('notifications') === 'notifications_no'}
                                value={'1'}
                            />
                        </Form.Field>
                        <Checkbox
                            register={register}
                            name={'notifications_owner'}
                            label={'Можно выбрать владельцем'}
                            value={'1'}
                        />
                    </Form.Fieldset>
                    <Form.Fieldset>
                        <CheckboxList
                            register={register}
                            label={'Другие разделы'}
                            direction={CheckboxListDirection.COLUMN}
                            options={[
                                {label: 'Купленные приложения', name: 'apps_buyer', value: '1'},
                                {label: 'Приложения менеджера', name: 'apps_manager', value: '1'},
                                {label: 'Домены', name: 'domains', value: '1'},
                                {label: 'Логи', name: 'log', value: '1'},
                                {label: 'Документация', name: 'dev', value: '1'},
                                {label: 'Пользователи', name: 'users', value: '1'},
                                {label: 'Редактировать арендаторов', name: 'users_tenant', value: '1'},
                            ]}
                        />
                    </Form.Fieldset>
                    <Form.Fieldset title={'Арендованные приложения'}>
                        <Form.Field>
                            <Checkbox
                                register={register}
                                name={'apps_tenant'}
                                label={'Арендованные приложения'}
                                value={'1'}
                            />
                        </Form.Field>
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
                                disabled={!watch('apps_tenant')}
                                placeholder={'Пополнить баланс'}
                                inputType={'number'}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <SelectInput
                                label={'Приложения'}
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
                                disabled={!watch('apps_tenant')}
                            />
                        </Form.Field>
                    </Form.Fieldset>
                </Form.Column>

            </Form.Row>

        </Form.Box>
    );
};

export default UserForm;