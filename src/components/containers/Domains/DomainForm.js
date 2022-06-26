import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";

import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";


const DomainForm = ({form, onSubmit, isOpen = true}) => {
    const accs = useSelector(state => state.domain.accs)
    useEffect(() => {
        if (isOpen) storage.domain.getAccs()
    }, [isOpen])

    const {handleSubmit, register, formState: {errors}, control, watch} = form


    return (
        <Form.Box onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
                <Form.Field width={FieldWidth.FULL}>
                    <TextInput
                        register={register}
                        errors={errors}
                        name={'domain'}
                        label={'Домен'}
                        placeholder={'Домен'}
                        validation={{
                            required: true,
                        }}
                    />
                </Form.Field>
                <Form.Field width={FieldWidth.FULL}>
                    <SelectInput
                        label={'Аккаунт'}
                        name={'account'}
                        control={control}
                        multiple={false}
                        options={[
                            {label: 'Нет', value: '0'},
                            watch('accs_name') && watch('accs_id')
                                ? {label: watch('accs_name'), value: watch('accs_id')}
                                : {},
                            ...accs.map(acc => ({label: acc.name, value: acc.id})),
                        ]}
                    />
                </Form.Field>
            </Form.Row>
        </Form.Box>
    );
};

export default DomainForm;