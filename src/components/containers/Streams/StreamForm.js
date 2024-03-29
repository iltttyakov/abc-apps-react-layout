import React, {useEffect, useState} from 'react';
import Form, {FieldWidth} from "../../ui/Form/Form";
import TextInput from "../../ui/inputs/TextInput/TextInput";
import {useSelector} from "react-redux";
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import storage from "../../../redux/rootActions";
import Role from "../Role/Role";
import accessCheck from "../../../helpers/accessCheck";
import Checkbox from "../../ui/inputs/Checkbox/Checkbox";


const StreamForm = ({form, onSubmit, isOpen = true}) => {
    const userRights = useSelector(state => state.auth.rights)
    const stream = useSelector(state => state.stream.active)
    const owners = useSelector(state => state.stream.owners)
    const apps = useSelector(state => state.stream.apps)
    const [appsOptions, setAppsOptions] = useState([])

    useEffect(() => {
        if (accessCheck(userRights, 'streams_all') && isOpen) {
            storage.stream.getOwners()
        }
    }, [isOpen])
    useEffect(() => {
        if (isOpen) storage.stream.getApps()
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            let array = [
                stream
                    ? {label: stream['apps_name'], value: stream['app']}
                    : {},
                ...apps.map(app => ({label: app.name, value: app.id}))
            ]
            array = array.filter((elem, index, self) => {
                return self.findIndex(
                    t => (t.label === elem.label && t.id === elem.id)
                ) === index
            })

            setAppsOptions(array)
        }
    }, [apps, stream, isOpen])

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
                    {
                        stream
                            ? null
                            : <Role accessTo={'streams_all'}>
                                <Form.Field>
                                    <Checkbox
                                        register={register}
                                        name={'default'}
                                        label={'Дефолтный поток'}
                                        value={'1'}
                                    />
                                </Form.Field>
                            </Role>
                    }
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
                                validation={{required: true,}}
                            />
                        </Form.Field>
                    </Role>
                    <Form.Field width={FieldWidth.FULL}>
                        <SelectInput
                            label={'Приложение'}
                            name={'app'}
                            control={control}
                            multiple={false}
                            options={appsOptions}
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