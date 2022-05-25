import React from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import Checkbox from "../../ui/inputs/Checkbox/Checkbox";
import CheckedTagList from "../../ui/inputs/CheckedTagList/CheckedTagList";
import RadioButtonList from "../../ui/inputs/RadioButtonList/RadioButtonList";
import CheckboxList, {CheckboxListDirection, CheckboxListLabelSize} from "../../ui/inputs/CheckboxList/CheckboxList";
import Button, {ButtonTypes} from "../../ui/Button/Button";
import {useForm} from "react-hook-form";

const NewUserForm = () => {
    const {register, handleSubmit, formState: {errors}, setValue, getValues} = useForm()

    return (
        <Form.Box>


            <Form.Row>

                <Form.Column>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors['login']}
                                name={'login'}
                                label={'Логин'}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors['passord']}
                                name={'passord'}
                                label={'Пароль'}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL} style={{marginBottom: '30px'}}>
                            <Checkbox
                                register={register}
                                name={'ban'}
                                label={'Бан'}
                                reverse={true}
                            />
                        </Form.Field>
                        <CheckedTagList
                            name={'user-role'}
                            register={register}
                            options={[
                                {label: 'Админ', value: 'admin'},
                                {label: 'Разработчик', value: 'dev'},
                                {label: 'Разработчик iOS', value: 'dev-ios'},
                                {label: 'Фармер', value: 'farmer'},
                                {label: 'Заливатор', value: 'uploader'},
                                {label: 'Байер', value: 'bayer-1'},
                                {label: 'Помощник', value: 'helper'},
                                {label: 'Покупатель', value: 'buyer'},
                                {label: 'Арендатор', value: 'tenant'},
                            ]}
                        />
                    </Form.Fieldset>
                </Form.Column>


                <Form.Column>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'board-availability'}
                                options={[
                                    {label: 'Недоступны', value: 'unavailable'},
                                    {label: 'Доступно', value: 'available'},
                                ]}
                                register={register}
                                label={'Доска'}
                            />
                        </Form.Field>
                        <CheckboxList
                            name={'board-checkboxes'}
                            register={register}
                            options={[
                                {label: 'Скрытые', value: 'hidden', disable: true},
                                {label: 'Восстановление', value: 'recovery', disable: true},
                            ]}
                        />
                    </Form.Fieldset>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                name={'streams-availability'}
                                options={[
                                    {label: 'Недоступны', value: 'unavailable'},
                                    {label: 'Доступно', value: 'own'},
                                    {label: 'Все', value: 'all'},
                                ]}
                                register={register}
                                label={'Потоки'}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <CheckboxList
                                name={'streams-checkboxes'}
                                register={register}
                                options={[
                                    {label: 'Скрытые', value: 'hidden', disable: true},
                                    {label: 'Восстановление', value: 'recovery', disable: true},
                                ]}
                            />
                        </Form.Field>
                        <CheckboxList
                            name={'streams-checkboxes-2'}
                            register={register}
                            options={[
                                {label: 'Покупателя', value: 'buyer', disable: true},
                                {label: 'Арендатора', value: 'tenant', disable: true},
                                {label: 'Можно выбрать владельцем', value: 'choose-owner'},
                            ]}
                            label={'Только приложения:'}
                            labelSize={CheckboxListLabelSize.SMALL}
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
                                name={'apps-grey'}
                                options={[
                                    {label: 'Недоступны', value: 'unavailable'},
                                    {label: 'Чтение', value: 'reading'},
                                    {label: 'Изменение', value: 'change'},
                                ]}
                                label={'Серые:'}
                                labelPosition={'left'}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                register={register}
                                name={'apps-white'}
                                options={[
                                    {label: 'Недоступны', value: 'unavailable'},
                                    {label: 'Чтение', value: 'reading'},
                                    {label: 'Изменение', value: 'change'},
                                ]}
                                label={'Белые:'}
                                labelPosition={'left'}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL} style={{marginBottom: '0'}}>
                            <CheckboxList
                                register={register}
                                name={'app-access'}
                                options={[
                                    {label: 'Добавление', value: 'adding', disable: true},
                                    {label: 'Удаление', value: 'deleting', disable: true},
                                ]}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL} style={{marginBottom: '0'}}>
                            <CheckboxList
                                register={register}
                                name={'app-fields2'}
                                options={[
                                    {label: 'Поля Покупатель и Арендаторы', value: 'fields', disable: true},
                                ]}
                            />
                        </Form.Field>
                        <Form.Field width={FieldWidth.FULL} style={{marginBottom: '13px'}}>
                            <CheckboxList
                                register={register}
                                name={'store'}
                                options={[
                                    {label: 'Play Market', value: 'play-market', disable: true},
                                    {label: 'App Store', value: 'app-store', disable: true},
                                    {label: 'Huawei', value: 'huawei', disable: true},
                                ]}
                            />
                        </Form.Field>
                        <CheckboxList
                            name={'can-choose'}
                            label={'Можно выбрать'}
                            register={register}
                            options={[
                                {label: 'Покупателям', value: 'buyer'},
                                {label: 'Арендатором', value: 'tenant'},
                            ]}
                        />
                    </Form.Fieldset>
                    <Form.Fieldset>
                        <Form.Field width={FieldWidth.FULL}>
                            <RadioButtonList
                                register={register}
                                name={'accounts'}
                                label={'Аккаунты'}
                                options={[
                                    {label: 'Недоступны', value: 'unavailable'},
                                    {label: 'Чтение', value: 'reading'},
                                    {label: 'Изменение', value: 'change'},
                                ]}
                            />
                        </Form.Field>
                        <CheckboxList
                            name={'accounts-access'}
                            register={register}
                            options={[
                                {label: 'Добавление', value: 'adding', disable: true},
                                {label: 'Удаление', value: 'deleting', disable: true},
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
                                    {label: 'Недоступны', value: 'unavailable'},
                                    {label: 'Свои', value: 'own'},
                                    {label: 'Все', value: 'all'},
                                ]}
                                register={register}
                            />
                        </Form.Field>
                        <CheckboxList
                            name={'notifications-checkbox'}
                            options={[
                                {label: 'Интерфейс покупателя', value: 'interface-buyer'},
                                {label: 'Можно выбрать владельцем', value: 'can-choose-owner'},
                            ]}
                            register={register}
                            direction={'column'}
                        />
                    </Form.Fieldset>
                    <Form.Fieldset>
                        <CheckboxList
                            name={'other'}
                            label={'Другие разделы'}
                            direction={CheckboxListDirection.COLUMN}
                            options={[
                                {label: 'Пользователи', value: ''},
                                {label: 'Документация', value: ''},
                                {label: 'Домены', value: ''},
                                {label: 'Логи', value: ''},
                                {label: 'Купленные приложения', value: ''},
                            ]}
                            register={register}
                        />
                    </Form.Fieldset>
                </Form.Column>

            </Form.Row>


            <Form.Actions
                align={'right'}
                items={[
                    <Button type={ButtonTypes.FILL}>Добавить</Button>,
                    <Button type={ButtonTypes.STROKE}>Отменить</Button>,
                ]}
            />

        </Form.Box>
    )
        ;
};

export default NewUserForm;