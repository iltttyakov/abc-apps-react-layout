import React from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import {useForm} from "react-hook-form";
import DropDown from "../../ui/inputs/DropDown/DropDown";
import RadioButtonList from "../../ui/inputs/RadioButtonList/RadioButtonList";
import KeyValueInputList from "../../ui/inputs/KeyValueInputList/KeyValueInputList";
import ImageInput from "../../ui/inputs/ImageInput/ImageInput";
import DateInput from "../../ui/inputs/DateInput/DateInput";
import DomainCheckInput from "../../ui/inputs/DomainCheckInput/DomainCheckInput";


import appIcon from './app-icon.png'
import Button, {ButtonSizes, ButtonTypes} from "../../ui/Button/Button";


const NewApp = () => {
    const {register, handleSubmit, formState: {errors}, setValue, getValues} = useForm()
    const onSubmit = data => console.log(data)

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
                                        errors={errors['id']}
                                        name={'id'}
                                        label={'ID'}
                                        placeholder={'ID приложения (автоматически)'}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <TextInput
                                        register={register}
                                        errors={errors['name']}
                                        name={'name'}
                                        label={'Название'}
                                        placeholder={'Название приложения'}
                                    />
                                </Form.Field>
                            </div>
                            <ImageInput
                                name={'image'}
                                label={'Изображение'}
                                currentImage={appIcon}
                            />
                        </Form.FieldList>

                        <Form.FieldList>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['package']}
                                    name={'package'}
                                    label={'Пакет'}
                                    placeholder={'com.example.app'}
                                />
                            </Form.Field>
                            <RadioButtonList
                                name={'app-type'}
                                register={register}
                                label={'Тип'}
                                options={[
                                    {label: 'Белое', value: 'white'},
                                    {label: 'Серое', value: 'grey'},
                                ]}
                            />
                        </Form.FieldList>

                        <Form.Row>
                            <Form.Field>
                                <DropDown
                                    label={'Аккаунт'}
                                    register={register}
                                    name={'account'}
                                    options={[
                                        {label: 'a320user', value: 'a320user'},
                                        {label: 'a321user', value: 'a321user'},
                                        {label: 'a322user', value: 'a322user'},
                                    ]}
                                />
                            </Form.Field>
                            <RadioButtonList
                                name={'store'}
                                register={register}
                                label={'Магазин'}
                                options={[
                                    {label: 'Play Market', value: 'PM'},
                                    {label: 'App Store', value: 'AS'},
                                    {label: 'Huawei', value: 'h'},
                                ]}
                            />
                        </Form.Row>

                    </Form.Fieldset>
                </Form.Column>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <DateInput
                                setValue={setValue}
                                name={'publish-date'}
                                register={register}
                                errors={errors['publish-date']}
                                label={'Дата залива'}
                                required={false}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <DateInput
                                setValue={setValue}
                                name={'approve-date'}
                                register={register}
                                errors={errors['approve-date']}
                                label={'Дата апрува'}
                                required={false}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL} style={{marginBottom: '98px'}}>
                            <DateInput
                                setValue={setValue}
                                name={'ban-date'}
                                register={register}
                                errors={errors['ban-date']}
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
                                name={'domain'}
                                label={'Домен'}
                                errors={errors['domain']}
                            />
                        </Form.Field>
                        <Form.FieldList>
                            <Form.Field style={{marginRight: '15px'}}>
                                <DropDown
                                    register={register}
                                    name={'customer'}
                                    label={'Покупатель'}
                                    options={[
                                        {label: 'Покуптель 1', value: 'customer-1'},
                                        {label: 'Покуптель 2', value: 'customer-2'},
                                        {label: 'Покуптель 3', value: 'customer-3'},
                                    ]}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    name={'tenants'}
                                    register={register}
                                    errors={errors['tenants']}
                                    label={'Арендаторы'}
                                />
                            </Form.Field>
                        </Form.FieldList>
                        <Form.Field width={FieldWidth.w515}>
                            <TextInput
                                name={'open-countries'}
                                register={register}
                                errors={errors['open-countries']}
                                label={'Открытые страны'}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.w515}>
                            <TextInput
                                register={register}
                                errors={errors['note']}
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
                                errors={errors['organic-link']}
                                name={'organic-link'}
                                label={'Органическая ссылка'}
                            />
                        </Form.Field>
                        <Form.FieldList>
                            <div style={{marginRight: '50px', marginBottom: '10px'}}>
                                <RadioButtonList
                                    name={'organic'}
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
                                    errors={errors['developer']}
                                    name={'developer'}
                                    label={'Разработчик'}
                                    placeholder={'Имя разработчика'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['collector']}
                                    name={'collector'}
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
                                    errors={errors['facebook-id']}
                                    name={'facebook-id'}
                                    label={'Facebook ID'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['client-token']}
                                    name={'client-token'}
                                    label={'Client Token'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['install-referrer-key']}
                                    name={'install-referrer-key'}
                                    label={'Install Referrer Key'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['secret']}
                                    name={'secret'}
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
                                    errors={errors['login-appsFlyer']}
                                    name={'login-appsFlyer'}
                                    label={'Логин AppsFlyer'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['dev-key']}
                                    name={'dev-key'}
                                    label={'Dev Key'}
                                    placeholder={'YOUR_APPS_FLYER_DEV_TOKEN'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['password-appsflyer']}
                                    name={'password-appsflyer'}
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
                                    errors={errors['name-onesignal']}
                                    name={'name-onesignal'}
                                    label={'Название OneSignal'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['key-onesignal']}
                                    name={'key-onesignal'}
                                    label={'Key OneSignal'}
                                    placeholder={'YOUR_REST_API_KEY'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['id-onesignal']}
                                    name={'id-onesignal'}
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
                                    errors={errors['proxy-host']}
                                    name={'proxy-host'}
                                    label={'Хост прокси'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['proxy-login']}
                                    name={'proxy-login'}
                                    label={'Логин прокси'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['proxy-port']}
                                    name={'proxy-port'}
                                    label={'Порт прокси'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <TextInput
                                    register={register}
                                    errors={errors['proxy-password']}
                                    name={'proxy-password'}
                                    label={'Пароль прокси'}
                                />
                            </Form.Field>
                        </Form.FieldList>

                        <Button
                            type={ButtonTypes.FILL}
                            size={ButtonSizes.SMALL}
                        >
                            Прокси из аккаунта
                        </Button>
                    </Form.Fieldset>
                </Form.Column>

            </Form.Row>


            <KeyValueInputList
                register={register}
                errors={errors}
            />

            <div style={{
                width: '100%',
                marginTop: '60px',
                marginBottom: '75px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    marginRight: '50px'
                }}>
                    <Button
                        type={ButtonTypes.STROKE}
                        size={ButtonSizes.BIG}
                        buttonType={'button'}
                    >
                        Удалить
                    </Button>
                </div>
                <Button
                    type={ButtonTypes.FILL}
                    size={ButtonSizes.BIG}
                    buttonType={'submit'}
                >
                    Сохранить
                </Button>,
            </div>

        </Form.Box>
    );
};

export default NewApp;