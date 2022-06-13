import React from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import countries from "../../../helpers/countries";


const AppsBuyerForm = ({form, onSubmit}) => {
    const {handleSubmit, register, formState: {errors}, control} = form

    return (
        <Form.Box onSubmit={handleSubmit(onSubmit)}>

            <Form.Field width={FieldWidth.FULL} style={{marginRight: 0}}>
                <TextInput
                    register={register}
                    errors={errors}
                    name={'name'}
                    label={'Название'}
                    placeholder={'Название приложения'}
                    disabled={true}
                    validation={{
                        required: true
                    }}
                />
            </Form.Field>

            <Form.Field width={FieldWidth.FULL} style={{marginRight: 0}}>
                <SelectInput
                    label={'Открытые страны'}
                    name={'countries'}
                    control={control}
                    multiple={true}
                    options={countries}
                />
            </Form.Field>

        </Form.Box>
    );
};

export default AppsBuyerForm;