import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";

import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import RadioButtonList from "../../ui/inputs/RadioButtonList/RadioButtonList";
import CheckboxList from "../../ui/inputs/CheckboxList/CheckboxList";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import Role from "../Role/Role";
import accessCheck from "../../../helpers/accessCheck";


const AccountForm = ({form, onSubmit, isOpen = true}) => {
    const userRights = useSelector(state => state.auth.rights)
    const domains = useSelector(state => state.acc.domains)
    useEffect(() => {
        if (isOpen) storage.acc.getDomains()
    }, [isOpen])

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
                                disabled={!accessCheck(userRights, 'accs_rw')}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'soft'}
                                register={register}
                                errors={errors}
                                label={'Программа'}
                                options={[
                                    {
                                        label: 'Dolphin',
                                        value: 'dolphin',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                    {
                                        label: 'OctoBrowser',
                                        value: 'octobrowser',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                    {
                                        label: 'Incognition',
                                        value: 'incognition',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                    {
                                        label: 'Multilogin',
                                        value: 'multilogin',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                ]}
                                validation={{
                                    required: true,
                                }}
                                disabled={!accessCheck(userRights, 'accs_rw')}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'type'}
                                register={register}
                                errors={errors}
                                label={'Тип'}
                                options={[
                                    {
                                        label: 'Лог',
                                        value: 'log',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                    {
                                        label: 'Фарм',
                                        value: 'farm',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                ]}
                                validation={{
                                    required: true,
                                }}
                                disabled={!accessCheck(userRights, 'accs_rw')}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'status'}
                                register={register}
                                errors={errors}
                                label={'Статус'}
                                options={[
                                    {
                                        label: 'Фарм',
                                        value: 'farm',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                    {
                                        label: 'Сдан',
                                        value: 'ready',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                    {
                                        label: 'Бан',
                                        value: 'ban',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                ]}
                                validation={{
                                    required: true,
                                }}
                                disabled={!accessCheck(userRights, 'accs_rw')}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <CheckboxList
                                name={'store'}
                                register={register}
                                label={'Магазин'}
                                options={[
                                    {
                                        label: 'Play Market',
                                        value: 'playMarket',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                    {
                                        label: 'App Store',
                                        value: 'appStore',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
                                    {
                                        label: 'Huawei',
                                        value: 'huawei',
                                        disable: !accessCheck(userRights, 'accs_rw')
                                    },
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
                                disabled={!accessCheck(userRights, 'accs_rw')}
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
                                disabled={!accessCheck(userRights, 'accs_rw')}
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
                                validation={{
                                    maxLength: 32,
                                }}
                                disabled={!accessCheck(userRights, 'accs_rw')}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'proxy_port'}
                                label={'Порт прокси'}
                                validation={{
                                    maxLength: 32,
                                }}
                                disabled={!accessCheck(userRights, 'accs_rw')}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'proxy_login'}
                                label={'Логин прокси'}
                                validation={{
                                    maxLength: 32,
                                }}
                                disabled={!accessCheck(userRights, 'accs_rw')}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'proxy_password'}
                                label={'Пароль прокси'}
                                validation={{
                                    maxLength: 32,
                                }}
                                disabled={!accessCheck(userRights, 'accs_rw')}
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
                                    disabled={!accessCheck(userRights, 'accs_rw')}
                                />
                            </Form.Field>
                        </Role>
                        <Role accessTo={'accs_rw'}>
                            <Form.Field width={FieldWidth.FULL} style={{marginBottom: 65}}>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'note'}
                                    label={'Примечание'}
                                    placeholder={'Примечание к аккаунту'}
                                    validation={{
                                        maxLength: 255,
                                    }}
                                    disabled={!accessCheck(userRights, 'accs_rw')}
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