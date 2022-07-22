import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";
import {useForm} from "react-hook-form";
import Form, {FieldWidth} from "../../ui/Form/Form";
import actions from "../../../redux/rootActions";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import countries from "../../../helpers/countries";
import Checkbox from "../../ui/inputs/Checkbox/Checkbox";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import TextareaInput from "../../ui/inputs/TextareaInput/TextareaInput";
import ImageInput from "../../ui/inputs/ImageInput/ImageInput";
import DateInput from "../../ui/inputs/DateInput/DateInput";
import TimeInput from "../../ui/inputs/TimeInput/TimeInput";
import CheckboxList from "../../ui/inputs/CheckboxList/CheckboxList";
import RadioButtonList from "../../ui/inputs/RadioButtonList/RadioButtonList";
import Role from "../Role/Role";
import {getIconUrl, getNotificationIconUrl} from "../../../helpers/getIconUrl";
import inArray from "../../../helpers/inArray";
import RoleFunc from "../Role/RoleFunc";
import CountriesSelect from "../CountriesSelect/CountriesSelect";


const NotificationForm = ({form, notification, onSubmit}) => {
    const userRights = useSelector(state => state.auth.rights)
    const groups = useSelector(state => state.notification.groups)
    const apps = useSelector(state => state.notification.apps)
    const owners = useSelector(state => state.notification.owners)
    useEffect(() => {

        if (!inArray(userRights, 'notifications_buyer')) {
            actions.notification.getGroups()
        }
        if (inArray(userRights, 'notifications_all')) {
            actions.notification.getOwners()
        }
        actions.notification.getApps()
    }, [])

    const {handleSubmit, register, formState: {errors}, control, watch, setValue, getValues, setError} = form


    useEffect(() => {
        const watcher = watch((value, {name, type}) => {
            if (name === 'group_id') {
                const index = groups.findIndex(group => group.id === value['group_id'])
                setValue('apps', groups[index].apps)
            }
        })

        return () => watcher.unsubscribe()
    }, [watch])


    return (
        <Form.Box onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>

                <Form.Column>
                    <Form.Fieldset>

                        <RoleFunc callback={rights => !inArray(rights, 'notifications_buyer')}>
                            <Form.Field width={FieldWidth.FULL}>
                                <SelectInput
                                    label={'Группа'}
                                    name={'group_id'}
                                    control={control}
                                    multiple={false}
                                    options={[
                                        {label: 'Группа не выбрана', value: '0'},
                                        ...groups.map(group => ({label: group.name, value: group.id}))
                                    ]}
                                    disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                                />
                            </Form.Field>
                        </RoleFunc>

                        <Form.Field width={FieldWidth.FULL}>
                            <SelectInput
                                label={'Приложения'}
                                name={'apps'}
                                control={control}
                                multiple={true}
                                options={apps.map(app => ({label: app.name, value: app.id}))}
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                            />
                        </Form.Field>

                        <Form.Row>
                            <Form.Field width={FieldWidth.FULL}>
                                <CountriesSelect
                                    label={'Список стран'}
                                    name={'countries'}
                                    control={control}
                                    multiple={true}
                                    disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                                />
                            </Form.Field>
                            <Checkbox
                                label={'Все страны'}
                                name={'settings_all_countries'}
                                value={'1'}
                                register={register}
                                style={{
                                    marginLeft: 20,
                                    whiteSpace: 'nowrap',
                                    alignItems: 'center',
                                    display: 'flex',
                                }}
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                            />
                        </Form.Row>

                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'heading'}
                                label={'Заголовок'}
                                placeholder={'Заголовок'}
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                                validation={{
                                    maxLength: 60,
                                }}
                                counter={60}
                            />
                        </Form.Field>

                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'subtitle'}
                                label={'Подзаголовок'}
                                placeholder={'Подзаголовок'}
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                                validation={{
                                    maxLength: 40,
                                }}
                                counter={40}
                            />
                        </Form.Field>

                        <Form.Field width={FieldWidth.FULL}>
                            <TextareaInput
                                register={register}
                                errors={errors}
                                name={'text'}
                                label={'Текст'}
                                placeholder={'Текст'}
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                                validation={{
                                    maxLength: 511,
                                }}
                                counter={511}
                            />
                        </Form.Field>

                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>
                    <Form.Fieldset style={{height: 'calc(100% - 20px)'}}>

                        <Form.Field width={FieldWidth.FULL}>
                            <ImageInput
                                name={'image'}
                                label={'Изображение'}
                                register={register}
                                currentImage={
                                    notification
                                        ? notification.image ? getNotificationIconUrl(notification.image) : null
                                        : null
                                }
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                            />
                        </Form.Field>

                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                label={'Кому'}
                                name={'smart_type'}
                                register={register}
                                errors={errors}
                                options={[
                                    {label: 'Установил, но за 15 минут не зарегистрировался', value: 'install_noreg'},
                                    {
                                        label: 'Зарегистрировался, но не совершил депозит за 30 минут',
                                        value: 'reg_nodep'
                                    },
                                    {label: 'Совершил депозит', value: 'dep'},
                                ]}
                            />
                        </Form.Field>

                        <Role accessTo={'notifications_all'}>
                            <Form.Field width={FieldWidth.FULL}>
                                <SelectInput
                                    label={'Владелец'}
                                    name={'owner'}
                                    control={control}
                                    multiple={false}
                                    options={owners.map(owner => ({label: owner.login, value: owner.id}))}
                                    disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                                />
                            </Form.Field>
                        </Role>

                    </Form.Fieldset>
                </Form.Column>

            </Form.Row>
            <Form.Row>
                <Form.Field style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <Checkbox
                        label={'Активировать уведомление'}
                        name={'settings_active'}
                        register={register}
                    />
                </Form.Field>
            </Form.Row>
        </Form.Box>
    );
};

export default NotificationForm;