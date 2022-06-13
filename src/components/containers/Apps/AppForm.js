import React, {useEffect} from 'react';
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


const AppForm = ({form, onSubmit, app = null}) => {
    const accs = useSelector(state => state.app.accs)
    const buyers = useSelector(state => state.app.buyers)
    const tenants = useSelector(state => state.app.tenants)
    useEffect(() => {
        storage.app.getAccs()
        storage.app.getBuyers()
        storage.app.getTenants()
    }, [])


    const {handleSubmit, register, formState: {errors}, control, watch, setValue, getValues, setError} = form

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
        setValue('domain', acc.domain)
    }

    const checkDomain = () => {
        const acc = accs.find(acc => acc.id === getValues('account'))
        if (acc) {
            console.log('check domain')
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
                                        placeholder={'Название приложения'}
                                        validation={{
                                            required: true
                                        }}
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
                                />
                            </Form.Field>
                            <RadioButtonList
                                name={'type'}
                                register={register}
                                label={'Тип'}
                                options={[
                                    {label: 'Белое', value: 'white'},
                                    {label: 'Серое', value: 'grey'},
                                ]}
                                validation={{
                                    required: true
                                }}
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
                                />
                            </Form.Field>
                            <RadioButtonList
                                name={'store'}
                                register={register}
                                label={'Магазин'}
                                options={[
                                    {label: 'Play Market', value: 'playMarket'},
                                    {label: 'App Store', value: 'appStore'},
                                    {label: 'Huawei', value: 'huawei'},
                                ]}
                                validation={{
                                    required: true
                                }}
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
                                />
                            </Form.Field>
                            <Form.Field>
                                <SelectInput
                                    label={'Арендаторы'}
                                    name={'tenants'}
                                    control={control}
                                    multiple={true}
                                    placeholder={'Арендаторы'}
                                    options={tenants.map(
                                        tenant => ({
                                            label: tenant.login, value: tenant.id
                                        })
                                    )}
                                />
                            </Form.Field>
                        </Form.FieldList>
                        <Form.Field width={FieldWidth.w515}>
                            <SelectInput
                                label={'Открытые страны'}
                                name={'countries'}
                                control={control}
                                multiple={true}
                                options={countries}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.w515}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'note'}
                                label={'Примечание'}
                            />
                        </Form.Field>
                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>

                    <Form.Fieldset>
                        <Form.Field>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'link'}
                                label={'Органическая ссылка'}
                            />
                        </Form.Field>
                        <Form.FieldList>
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
                            <RadioButtonList
                                name={'naming'}
                                register={register}
                                label={'Нейминг'}
                                options={[
                                    {label: 'True', value: 'true'},
                                    {label: 'False', value: 'false'},
                                ]}
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
                                    placeholder={'Имя разработчика'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'builder'}
                                    label={'Сборщик'}
                                    placeholder={'Имя сборщика'}
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
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'fb_client_token'}
                                    label={'Client Token'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'fb_app_access_token'}
                                    label={'Install Referrer Key'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'fb_secret'}
                                    label={'Secret'}
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
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'dev_key'}
                                    label={'Dev Key'}
                                    placeholder={'YOUR_APPS_FLYER_DEV_TOKEN'}
                                    validation={{
                                        required: watch('naming') === 'true'
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'af_password'}
                                    label={'Пароль AppsFlyer'}
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
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'onesignal_key'}
                                    label={'Key OneSignal'}
                                    placeholder={'YOUR_REST_API_KEY'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'onesignal_id'}
                                    label={'ID OneSignal'}
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
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'proxy_login'}
                                    label={'Логин прокси'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'proxy_port'}
                                    label={'Порт прокси'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors}
                                    name={'proxy_password'}
                                    label={'Пароль прокси'}
                                />
                            </Form.Field>
                        </Form.FieldList>
                        <Button
                            type={ButtonTypes.FILL}
                            size={ButtonSizes.SMALL}
                            shadow={false}
                            onClick={setProxyFromAcc}
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
            />
        </Form.Box>
    );
};

export default AppForm;