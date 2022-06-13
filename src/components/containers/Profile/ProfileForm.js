import React from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput, {TextInputSizes} from "../../ui/inputs/TextInput/TextInput";

const ProfileForm = ({form}) => {
    const {handleSubmit, register, formState: {errors}, control, watch} = form

    return (
        <Form.Box>
                <Form.Field width={FieldWidth.FULL}>
                    <TextInput
                        label={'Старый пароль'}
                        name={'old_password'}
                        size={TextInputSizes.BIG}
                        register={register}
                        errors={errors}
                        validation={{
                            required: true
                        }}
                    />
                </Form.Field>
                <Form.Field width={FieldWidth.FULL}>
                    <TextInput
                        label={'Новый пароль'}
                        name={'new_password'}
                        size={TextInputSizes.BIG}
                        register={register}
                        errors={errors}
                        validation={{
                            required: true
                        }}
                    />
                </Form.Field>
                <Form.Field width={FieldWidth.FULL}>
                    <TextInput
                        label={'Повторите новый пароль'}
                        name={'new_password_repeat'}
                        size={TextInputSizes.BIG}
                        register={register}
                        errors={errors}
                        validation={{
                            required: true
                        }}
                    />
                </Form.Field>
        </Form.Box>
    );
};

export default ProfileForm;