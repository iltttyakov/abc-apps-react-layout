import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
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
import {getNotificationIconUrl} from "../../../helpers/getIconUrl";


const NotificationForm = ({form, notification, onSubmit}) => {
    const groups = useSelector(state => state.notification.groups)
    const apps = useSelector(state => state.notification.apps)
    const owners = useSelector(state => state.notification.owners)
    useEffect(() => {
        actions.notification.getGroups()
        actions.notification.getApps()
        actions.notification.getOwners()
    }, [])

    const {handleSubmit, register, formState: {errors}, control, watch, setValue, getValues, setError} = form

    const setAppsFromGroup = value => {
        const index = groups.findIndex(group => group.id === value)
        setValue('apps', groups[index] ? groups[index].apps : [])
    }


    return (
        <Form.Box onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>

                <Form.Column>
                    <Form.Fieldset>

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
                                changeHandler={value => {
                                    setAppsFromGroup(value)
                                }}
                            />
                        </Form.Field>

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
                                <SelectInput
                                    label={'Список стран'}
                                    name={'countries'}
                                    control={control}
                                    multiple={true}
                                    options={countries}
                                    disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                                />
                            </Form.Field>
                            <Checkbox
                                label={'Все страны'}
                                name={'settings_all_countries'}
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
                            />
                        </Form.Field>

                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>
                    <Form.Fieldset>

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
                            <DateInput
                                label={'Дата'}
                                name={'date'}
                                errors={errors}
                                register={register}
                                setValue={setValue}
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                            />
                        </Form.Field>

                        <Form.Field width={FieldWidth.FULL}>
                            <TimeInput
                                label={'Время'}
                                name={'time'}
                                errors={errors}
                                register={register}
                                setValue={setValue}
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                            />
                        </Form.Field>

                        <Form.Field width={FieldWidth.FULL}>
                            <CheckboxList
                                register={register}
                                label={'Настройки'}
                                options={[
                                    {label: 'согласно таймзоне', name: 'settings_timezone', value: '1'}
                                ]}
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
                            />
                        </Form.Field>

                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                register={register}
                                label={'Повтор'}
                                name={'repeat_period'}
                                options={[
                                    {label: 'Однократно', value: 'once'},
                                    {label: 'День', value: 'day'},
                                    {label: 'Неделя', value: 'week'},
                                ]}
                                disabled={watch('was_sent') !== null && watch('generator ') === '0'}
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