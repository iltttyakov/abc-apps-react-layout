import React, {useEffect, useState} from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import ImageInput from "../../ui/inputs/ImageInput/ImageInput";
import RadioButtonList from "../../ui/inputs/RadioButtonList/RadioButtonList";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import DateInput from "../../ui/inputs/DateInput/DateInput";
import DomainCheckInput from "../../ui/inputs/DomainCheckInput/DomainCheckInput";
import countries from "../../../helpers/countries";
import Button, {ButtonSizes, ButtonTypes} from "../../ui/Button/Button";
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";
import {toast} from "react-toastify";
import KeyValueInputList from "../../ui/inputs/KeyValueInputList/KeyValueInputList";
import {getIconUrl} from "../../../helpers/getIconUrl";
import Role from "../Role/Role";
import accessCheck from "../../../helpers/accessCheck";


const AppForm = ({form, onSubmit, app = null}) => {
    const [allDisabled, setAllDisabled] = useState(false)
    const userRights = useSelector(state => state.auth.rights)
    const accs = useSelector(state => state.app.accs)
    const buyers = useSelector(state => state.app.buyers)
    const tenants = useSelector(state => state.app.tenants)
    useEffect(() => {
        storage.app.getAccs()
        storage.app.getBuyers()
        storage.app.getTenants()
    }, [])

    const {handleSubmit, register, formState: {errors}, control, watch, setValue, getValues, setError} = form

    useEffect(() => {
        setAllDisabled(!accessCheck(
            userRights,
            watch('type') === 'grey'
                ? 'grey_rw'
                : 'white_rw'
        ))
    }, [watch('type')])

    const setProxyFromAcc = () => {
        const acc = accs.find(acc => acc.id === getValues('account'))
        if (acc) {
            setValue('proxy_host', acc['proxy_host'])
            setValue('proxy_login', acc['proxy_login'])
            setValue('proxy_port', acc['proxy_port'])
            setValue('proxy_password', acc['proxy_password'])
        } else {
            toast.warning('Выберите аккаунт', {
                position: 'top-right',
                autoClose: 3500,
                hideProgressBar: false,
            })
        }
    }

    const setDomainFromAcc = accId => {
        const acc = accs.find(acc => acc.id === accId)
        setValue('domain', acc.domain_name)
        setValue('domain_id', acc.domain_id)
    }

    const checkDomain = () => {
        const acc = accs.find(acc => acc.id === getValues('account'))
        if (acc) {
            const domainId = getValues('domain_id')
            storage.domain.check(
                domainId,
                'custom'
            )
        } else {
            toast.warning('Выберите аккаунт', {
                position: 'top-right',
                autoClose: 3500,
                hideProgressBar: false,
            })
        }
    }


    return (
        <Form.Box onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.FieldList>
                            <div>
                                <Form.Field>
                                    <TextInput
                                        register={register}
                                        errors={errors}
                                        name={'id'}
                                        label={'ID'}
                                        placeholder={'ID приложения (автоматически)'}
                                        disabled={true}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <TextInput
                                        register={register}
                                        errors={errors}
                                        name={'name'}
                                        label={'Название'}
                                        validation={{
                                            required: true
                                        }}
                                        disabled={allDisabled}
                                    />
                                </Form.Field>
                            </div>
                            <ImageInput
                                name={'icon'}
                                label={'Изображение'}
                                register={register}
                                currentImage={
                                    app
                                        ? app.icon ? getIconUrl(app.icon) : null
                                        : null
                                }
                                disabled={allDisabled}
                            />
                        </Form.FieldList>

                        <Form.FieldList>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'package'}
                                    label={'Пакет'}
                                    placeholder={'com.example.app'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <RadioButtonList
                                name={'type'}
                                register={register}
                                label={'Тип'}
                                options={[
                                    {
                                        label: 'Белое',
                                        value: 'white',
                                        disable: !accessCheck(userRights, 'white_rw')
                                    },
                                    {
                                        label: 'Серое',
                                        value: 'grey',
                                        disable: !accessCheck(userRights, 'grey_rw')
                                    },
                                ]}
                                validation={{
                                    required: true
                                }}
                                disabled={allDisabled}
                            />
                        </Form.FieldList>

                        <Form.Row>
                            <Form.Field>
                                <SelectInput
                                    label={'Аккаунт'}
                                    name={'account'}
                                    control={control}
                                    multiple={false}
                                    options={accs.map(acc => ({label: acc.name, value: acc.id}))}
                                    changeHandler={value => {
                                        setDomainFromAcc(value)
                                    }}
                                    validation={{
                                        required: true
                                    }}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <RadioButtonList
                                name={'store'}
                                register={register}
                                label={'Магазин'}
                                options={[
                                    {
                                        label: 'Play Market',
                                        value: 'playMarket',
                                        disable: !accessCheck(userRights, 'apps_playMarket')
                                    },
                                    {
                                        label: 'App Store',
                                        value: 'appStore',
                                        disable: !accessCheck(userRights, 'apps_appStore')
                                    },
                                    {
                                        label: 'Huawei',
                                        value: 'huawei',
                                        disable: !accessCheck(userRights, 'apps_huawei')
                                    },
                                ]}
                                validation={{required: true}}
                                disabled={allDisabled}
                            />
                        </Form.Row>

                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <DateInput
                                setValue={setValue}
                                name={'date_create'}
                                register={register}
                                errors={errors}
                                label={'Дата залива'}
                                required={false}
                                control={control}
                                disabled={allDisabled}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <DateInput
                                setValue={setValue}
                                name={'date_approve'}
                                register={register}
                                errors={errors}
                                label={'Дата апрува'}
                                required={false}
                                control={control}
                                disabled={allDisabled}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL} style={{marginBottom: '98px'}}>
                            <DateInput
                                setValue={setValue}
                                name={'date_ban'}
                                register={register}
                                errors={errors}
                                label={'Дата бана'}
                                required={false}
                                control={control}
                                disabled={allDisabled}
                            />
                        </Form.Field>
                    </Form.Fieldset>
                </Form.Column>

            </Form.Row>

            <Form.Row>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <DomainCheckInput
                                register={register}
                                errors={errors}
                                name={'domain'}
                                label={'Домен'}
                                onCheck={checkDomain}
                                disabled={true}
                            />
                        </Form.Field>

                        <Role accessTo={'apps_rw_buyer'}>
                            <Form.FieldList>
                                <Form.Field style={{marginRight: '15px'}}>
                                    <SelectInput
                                        label={'Покупатель'}
                                        name={'buyer'}
                                        control={control}
                                        multiple={false}
                                        options={[
                                            {label: 'Нет', value: '0'},
                                            ...buyers.map(buyer => ({label: buyer.login, value: buyer.id}))
                                        ]}
                                        disabled={allDisabled}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <SelectInput
                                        label={'Арендаторы'}
                                        name={'tenants'}
                                        control={control}
                                        multiple={true}
                                        options={tenants.map(
                                            tenant => ({
                                                label: tenant.login, value: tenant.id
                                            })
                                        )}
                                        disabled={allDisabled}
                                    />
                                </Form.Field>
                            </Form.FieldList>
                        </Role>

                        <Form.Field width={FieldWidth.w515}>
                            <SelectInput
                                label={'Открытые страны'}
                                name={'countries'}
                                control={control}
                                multiple={true}
                                options={countries}
                                disabled={allDisabled}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.w515}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'note'}
                                label={'Примечание'}
                                disabled={allDisabled}
                            />
                        </Form.Field>
                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>

                    <Form.Fieldset>
                        <Role accessTo={'streams_all'}>
                            <Form.Field width={FieldWidth.FULL}>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'link'}
                                    label={'Органическая ссылка'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                        </Role>
                        <Form.FieldList>
                            <Role accessTo={'streams_all'}>
                                <div style={{marginRight: '50px', marginBottom: '10px'}}>
                                    <RadioButtonList
                                        name={'mode'}
                                        register={register}
                                        label={'Органика'}
                                        options={[
                                            {label: 'True', value: 'true'},
                                            {label: 'False', value: 'false'},
                                        ]}
                                        disabled={allDisabled}
                                    />
                                </div>
                            </Role>
                            <RadioButtonList
                                name={'naming'}
                                register={register}
                                label={'Нейминг'}
                                options={[
                                    {label: 'True', value: 'true'},
                                    {label: 'False', value: 'false'},
                                ]}
                                disabled={allDisabled}
                            />
                        </Form.FieldList>
                    </Form.Fieldset>

                    <Form.Fieldset>
                        <Form.FieldList>
                            <Form.Field style={{marginBottom: '43px'}}>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'creator'}
                                    label={'Разработчик'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'builder'}
                                    label={'Сборщик'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                        </Form.FieldList>
                    </Form.Fieldset>

                </Form.Column>

            </Form.Row>

            <Form.Row>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.FieldList>

                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'fb_app_id'}
                                    label={'Facebook ID'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'fb_client_token'}
                                    label={'Client Token'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'fb_app_access_token'}
                                    label={'Install Referrer Key'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'fb_secret'}
                                    label={'Secret'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                        </Form.FieldList>
                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.FieldList>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'af_login'}
                                    label={'Логин AppsFlyer'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'af_password'}
                                    label={'Пароль AppsFlyer'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field style={{width: 520}}>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'dev_key'}
                                    label={'Dev Key'}
                                    validation={{
                                        required: watch('naming') === 'true'
                                    }}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                        </Form.FieldList>
                    </Form.Fieldset>
                </Form.Column>

            </Form.Row>

            <Form.Row>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.FieldList style={{marginBottom: '85px'}}>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'onesignal_name'}
                                    label={'Название OneSignal'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'onesignal_id'}
                                    label={'ID OneSignal'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field style={{width: 520}}>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'onesignal_key'}
                                    label={'Key OneSignal'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                        </Form.FieldList>
                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.FieldList style={{marginBottom: '43px'}}>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'proxy_host'}
                                    label={'Хост прокси'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'proxy_login'}
                                    label={'Логин прокси'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'proxy_port'}
                                    label={'Порт прокси'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'proxy_password'}
                                    label={'Пароль прокси'}
                                    disabled={allDisabled}
                                />
                            </Form.Field>
                        </Form.FieldList>
                        <Button
                            type={ButtonTypes.FILL}
                            size={ButtonSizes.SMALL}
                            shadow={false}
                            onClick={setProxyFromAcc}
                            disabled={allDisabled}
                        >
                            Прокси из аккаунта
                        </Button>
                    </Form.Fieldset>
                </Form.Column>

            </Form.Row>

            <KeyValueInputList
                register={register}
                errors={errors}
                control={control}
                name={'fields'}
                disabled={allDisabled}
            />
        </Form.Box>
    );
};

export default AppForm;