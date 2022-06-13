import React, {useEffect} from 'react';
import actions from "../../../redux/rootActions";
import {useSelector} from "react-redux";

import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";


const GroupForm = ({form, onSubmit}) => {
    const apps = useSelector(state => state.group.apps)
    useEffect(actions.group.getApps, [])

    const {handleSubmit, register, formState: {errors}, control} = form

    return (
        <Form.Box onSubmit={handleSubmit(onSubmit)}>

            <Form.Field width={FieldWidth.FULL}>
                <TextInput
                    register={register}
                    errors={errors}
                    name={'name'}
                    label={'Название группы'}
                    validation={{
                        required: true
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
                />
            </Form.Field>

        </Form.Box>
    );
};

export default GroupForm;