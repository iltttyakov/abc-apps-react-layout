import React, {useEffect} from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import {useSelector} from "react-redux";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import storage from "../../../redux/rootActions";
import Role from "../Role/Role";
import accessCheck from "../../../helpers/accessCheck";


const StreamForm = ({form, onSubmit}) => {
    const userRights = useSelector(state => state.auth.rights)
    const owners = useSelector(state => state.stream.owners)
    useEffect(() => {
        if (accessCheck(userRights, 'streams_all')) {
            storage.stream.getOwners()
        }
    }, [])
    const apps = useSelector(state => state.stream.apps)
    useEffect(storage.stream.getApps, [])

    const {handleSubmit, register, formState: {errors}, control, getValues, watch} = form


    return (
        <Form.Box onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
                <Form.Column>
                    <Form.Field width={FieldWidth.FULL}>
                        <TextInput
                            register={register}
                            errors={errors}
                            name={'link'}
                            label={'Ссылка'}
                            placeholder={'Ссылка'}
                            validation={{
                                required: true,
                                maxLength: 255,
                            }}
                        />
                    </Form.Field>
                    <Role accessTo={'streams_all'}>
                        <Form.Field width={FieldWidth.FULL}>
                            <TextInput
                                register={register}
                                errors={errors}
                                name={'offer'}
                                label={'Оффер'}
                                placeholder={'Оффер внутри ссылки'}
                                validation={{
                                    maxLength: 32,
                                }}
                            />
                        </Form.Field>
                    </Role>
                </Form.Column>
                <Form.Column>
                    <Role accessTo={'streams_all'}>
                        <Form.Field width={FieldWidth.FULL}>
                            <SelectInput
                                label={'Владелец'}
                                name={'owner'}
                                control={control}
                                multiple={false}
                                options={owners.map(
                                    owner => ({label: owner.login, value: owner.id})
                                )}
                                validation={{
                                    required: true,
                                }}
                            />
                        </Form.Field>
                    </Role>
                    <Form.Field width={FieldWidth.FULL}>
                        <SelectInput
                            label={'Приложение'}
                            name={'app'}
                            control={control}
                            multiple={false}
                            options={[
                                watch('apps_name') && watch('app')
                                    ? {label: watch('apps_name'), value: watch('app')}
                                    : {},
                                ...apps.map(app => ({label: app.name, value: app.id}))
                            ]}
                            validation={{
                                required: true,
                            }}
                            disabled={watch('naming') === ''}
                        />
                    </Form.Field>
                </Form.Column>
            </Form.Row>
        </Form.Box>
    );
};

export default StreamForm;