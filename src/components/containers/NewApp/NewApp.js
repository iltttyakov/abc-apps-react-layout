import React from 'react';
import Form from "../../ui/Form/Form";
import TextInput from "../../ui/TextInput/TextInput";
import {useForm} from "react-hook-form";
import DropDown from "../../ui/inputs/DropDown/DropDown";
import RadioGroup from "../../ui/inputs/RadioGroup/RadioGroup";
import DateInput from "../../ui/inputs/DateInput/DateInput";
import DomainCheckInput from "../../ui/DomainCheckInput/DomainCheckInput";
import KeyValueFieldList from "../../ui/KeyValueFieldList/KeyValueFieldList";
import ImageInput from "../../ui/inputs/ImageInput/ImageInput";


import appIcon from './app-icon.png'
import TableSortingButton from "../../ui/Table/TableSortingButton/TableSortingButton";
import TableSelect from "../../ui/Table/TableSelect/TableSelect";


const NewApp = () => {
    const {register, handleSubmit, formState: {errors}, setValue, getValues} = useForm()
    const onSubmit = data => console.log(data)

    return (

        <Form.Box onSubmit={handleSubmit(onSubmit)}>

            <Form.Fieldset>
                <Form.Row>

                    <Form.Column width={250}>
                        <Form.Item>
                            <TextInput
                                register={register}
                                errors={errors['id']}
                                name={'id'}
                                label={'ID'}
                                placeholder={'ID приложения (автоматически)'}
                            />
                        </Form.Item>
                        <Form.Item>
                            <TextInput
                                register={register}
                                errors={errors['name']}
                                name={'name'}
                                label={'Название'}
                                placeholder={'Название приложения'}
                            />
                        </Form.Item>
                        <Form.Item>
                            <TextInput
                                register={register}
                                errors={errors['package']}
                                name={'package'}
                                label={'Пакет'}
                                placeholder={'com.example.app'}
                            />
                        </Form.Item>
                        <Form.Item>
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
                        </Form.Item>
                    </Form.Column>

                    <Form.Column>
                        <Form.Item style={{marginBottom: 15}}>
                            <ImageInput
                                name={'image'}
                                label={'Изображение'}
                                currentImage={appIcon}
                            />
                        </Form.Item>
                        <Form.Item style={{marginBottom: 23}}>
                            <RadioGroup
                                name={'app-type'}
                                register={register}
                                label={'Тип'}
                                options={[
                                    {label: 'Белое', value: 'white'},
                                    {label: 'Серое', value: 'grey'},
                                ]}
                            />
                        </Form.Item>
                        <Form.Item style={{marginBottom: 23}}>
                            <RadioGroup
                                name={'store'}
                                register={register}
                                label={'Магазин'}
                                options={[
                                    {label: 'Play Market', value: 'PM'},
                                    {label: 'App Store', value: 'AS'},
                                    {label: 'Huawei', value: 'h'},
                                ]}
                            />
                        </Form.Item>
                    </Form.Column>

                </Form.Row>
            </Form.Fieldset>

            {/** }
            <Form.Fieldset>
                <Form.Item>
                    <DateInput
                        setValue={setValue}
                        name={'publish-date'}
                        register={register}
                        errors={errors['publish-date']}
                        label={'Дата залива'}
                        required={false}
                    />
                </Form.Item>
                <Form.Item>
                    <DateInput
                        setValue={setValue}
                        name={'approve-date'}
                        register={register}
                        errors={errors['approve-date']}
                        label={'Дата апрува'}
                        required={false}
                    />
                </Form.Item>
                <Form.Item>
                    <DateInput
                        setValue={setValue}
                        name={'ban-date'}
                        register={register}
                        errors={errors['ban-date']}
                        label={'Дата бана'}
                        required={false}
                    />
                </Form.Item>
            </Form.Fieldset>

            <Form.Fieldset>

                <Form.Item>
                    <DomainCheckInput
                        register={register}
                        name={'domain'}
                        label={'Домен'}
                        errors={errors['domain']}
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Row>
                        <Form.Column width={250}>
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
                        </Form.Column>
                        <Form.Column width={250}>
                            <TextInput
                                name={'tenants'}
                                register={register}
                                errors={errors['tenants']}
                                label={'Арендаторы'}
                            />
                        </Form.Column>
                    </Form.Row>
                </Form.Item>

                <Form.Column width={515}>
                    <Form.Item>
                        <TextInput
                            name={'open-countries'}
                            register={register}
                            errors={errors['open-countries']}
                            label={'Открытые страны'}
                        />
                    </Form.Item>
                </Form.Column>

                <Form.Column width={515}>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['note']}
                            name={'note'}
                            label={'Примечание'}
                        />
                    </Form.Item>
                </Form.Column>

            </Form.Fieldset>

            <Form.Section>
                <Form.Fieldset>
                    <Form.Column width={250}>
                        <Form.Item>
                            <TextInput
                                register={register}
                                errors={errors['organic-link']}
                                name={'organic-link'}
                                label={'Органическая ссылка'}
                            />
                        </Form.Item>
                    </Form.Column>

                    <Form.Row>

                        <Form.Column width={194}>
                            <RadioGroup
                                name={'organic'}
                                register={register}
                                label={'Органика'}
                                options={[
                                    {label: 'True', value: 'true'},
                                    {label: 'False', value: 'false'},
                                ]}
                            />
                        </Form.Column>

                        <Form.Column>
                            <RadioGroup
                                name={'naming'}
                                register={register}
                                label={'Нейминг'}
                                options={[
                                    {label: 'True', value: 'true'},
                                    {label: 'False', value: 'false'},
                                ]}
                            />
                        </Form.Column>

                    </Form.Row>

                </Form.Fieldset>

                <Form.Fieldset>
                    <Form.Item>

                        <Form.Column>
                            <TextInput
                                register={register}
                                errors={errors['developer']}
                                name={'developer'}
                                label={'Разработчик'}
                                placeholder={'Имя разработчика'}
                            />
                        </Form.Column>

                        <Form.Column>
                            <TextInput
                                register={register}
                                errors={errors['collector']}
                                name={'collector'}
                                label={'Сборщик'}
                                placeholder={'Имя сборщика'}
                            />
                        </Form.Column>

                    </Form.Item>
                </Form.Fieldset>
            </Form.Section>

            <Form.Fieldset>
                <Form.Column>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['facebook-id']}
                            name={'facebook-id'}
                            label={'Facebook ID'}
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['client-token']}
                            name={'client-token'}
                            label={'Client Token'}
                        />
                    </Form.Item>
                </Form.Column>
                <Form.Column>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['install-referrer-key']}
                            name={'install-referrer-key'}
                            label={'Install Referrer Key'}
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['secret']}
                            name={'secret'}
                            label={'Secret'}
                        />
                    </Form.Item>
                </Form.Column>
            </Form.Fieldset>

            <Form.Fieldset>
                <Form.Column>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['login-appsFlyer']}
                            name={'login-appsFlyer'}
                            label={'Логин AppsFlyer'}
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['dev-key']}
                            name={'dev-key'}
                            label={'Dev Key'}
                            placeholder={'YOUR_APPS_FLYER_DEV_TOKEN'}
                        />
                    </Form.Item>
                </Form.Column>
                <Form.Column>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['password-appsflyer']}
                            name={'password-appsflyer'}
                            label={'Пароль AppsFlyer'}
                        />
                    </Form.Item>
                </Form.Column>
            </Form.Fieldset>

            <Form.Fieldset>
                <Form.Column>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['name-onesignal']}
                            name={'name-onesignal'}
                            label={'Название OneSignal'}
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['key-onesignal']}
                            name={'key-onesignal'}
                            label={'Key OneSignal'}
                            placeholder={'YOUR_REST_API_KEY'}
                        />
                    </Form.Item>
                </Form.Column>
                <Form.Column>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['id-onesignal']}
                            name={'id-onesignal'}
                            label={'ID OneSignal'}
                        />
                    </Form.Item>
                </Form.Column>
            </Form.Fieldset>

            <Form.Fieldset>
                <Form.Column>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['proxy-host']}
                            name={'proxy-host'}
                            label={'Хост прокси'}
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['proxy-login']}
                            name={'proxy-login'}
                            label={'Логин прокси'}
                        />
                    </Form.Item>
                </Form.Column>
                <Form.Column>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['proxy-port']}
                            name={'proxy-port'}
                            label={'Порт прокси'}
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextInput
                            register={register}
                            errors={errors['proxy-password']}
                            name={'proxy-password'}
                            label={'Пароль прокси'}
                        />
                    </Form.Item>
                </Form.Column>
            </Form.Fieldset>
             **/ }

            <KeyValueFieldList
                register={register}
            />

            <TableSelect
                register={register}
                name={'test'}
                multiple={true}
                options={[
                    {label: 'Пунк 1', value: 'item-1'},
                    {label: 'Пунк 2', value: 'item-2'},
                    {label: 'Пунк 3', value: 'item-3'},
                ]}
                label={'Тип'}
            />

            <div style={{width: '100%', marginTop: '50px'}}>
                <button type={'submit'}>
                    Отправить
                </button>
            </div>

        </Form.Box>

    );
};

export default NewApp;