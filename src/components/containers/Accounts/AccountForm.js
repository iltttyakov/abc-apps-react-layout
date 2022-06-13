import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";

import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import RadioButtonList from "../../ui/inputs/RadioButtonList/RadioButtonList";
import CheckboxList from "../../ui/inputs/CheckboxList/CheckboxList";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import Role from "../Role/Role";


const AccountForm = ({form, onSubmit}) => {
    const domains = useSelector(state => state.acc.domains)
    useEffect(storage.acc.getDomains, [])

    const {handleSubmit, register, formState: {errors}, control, watch} = form

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
                                placeholder={'Название аккаунта'}
                                validation={{
                                    required: true,
                                    maxLength: 50,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'soft'}
                                register={register}
                                errors={errors}
                                label={'Программа'}
                                options={[
                                    {label: 'Dolphin', value: 'dolphin'},
                                    {label: 'OctoBrowser', value: 'octobrowser'},
                                    {label: 'Incognition', value: 'incognition'},
                                    {label: 'Multilogin', value: 'multilogin'},
                                ]}
                                validation={{
                                    required: true,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'type'}
                                register={register}
                                errors={errors}
                                label={'Тип'}
                                options={[
                                    {label: 'Лог', value: 'log'},
                                    {label: 'Фарм', value: 'farm'},
                                ]}
                                validation={{
                                    required: true,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'status'}
                                register={register}
                                errors={errors}
                                label={'Статус'}
                                options={[
                                    {label: 'Фарм', value: 'farm'},
                                    {label: 'Сдан', value: 'ready'},
                                    {label: 'Бан', value: 'ban'},
                                ]}
                                validation={{
                                    required: true,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <CheckboxList
                                name={'store'}
                                register={register}
                                label={'Магазин'}
                                options={[
                                    {label: 'Play Market', value: 'playMarket'},
                                    {label: 'AppSingle Store', value: 'appStore'},
                                    {label: 'Huawei', value: 'huawei'},
                                ]}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'login'}
                                label={'Логин'}
                                placeholder={'Логин в аккаунте'}
                                validation={{
                                    maxLength: 32,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'password'}
                                label={'Пароль'}
                                placeholder={'Пароль для аккаунта'}
                                validation={{
                                    maxLength: 32,
                                }}
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
                                name={'proxy_host'}
                                label={'Хост прокси'}
                                placeholder={'Хост прокси'}
                                validation={{
                                    maxLength: 32,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'proxy_port'}
                                label={'Порт прокси'}
                                placeholder={'Порт прокси'}
                                validation={{
                                    maxLength: 32,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'proxy_login'}
                                label={'Логин прокси'}
                                placeholder={'Логин прокси'}
                                validation={{
                                    maxLength: 32,
                                }}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'proxy_password'}
                                label={'Пароль прокси'}
                                placeholder={'Пароль прокси'}
                                validation={{
                                    maxLength: 32,
                                }}
                            />
                        </Form.Field>
                        <Role accessTo={'accs_rw'}>
                            <Form.Field width={FieldWidth.FULL}>
                                <SelectInput
                                    label={'Домен'}
                                    name={'domain'}
                                    control={control}
                                    multiple={false}
                                    options={[
                                        {label: 'Нет', value: '0'},
                                        watch('domains_domain') && watch('domain')
                                            ? {label: watch('domains_domain'), value: watch('domain')}
                                            : {},
                                        ...domains.map(domain => ({label: domain.domain, value: domain.id})),
                                    ]}
                                />
                            </Form.Field>
                        </Role>
                        <Role accessTo={'accs_rw'}>
                            <Form.Field width={FieldWidth.FULL}>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'note'}
                                    label={'Примечание'}
                                    placeholder={'Примечание'}
                                    validation={{
                                        maxLength: 255,
                                    }}
                                />
                            </Form.Field>
                        </Role>
                    </Form.Fieldset>
                </Form.Column>
            </Form.Row>
        </Form.Box>
    );
};

export default AccountForm;