import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import storage from "../../../redux/rootActions";
import AppForm from "./AppForm";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonSizes} from "../../ui/Button/Button";
import paths from "../../paths";
import {useHistory} from "react-router";
import {appDefaultValues, appPacking, appValidate} from "./appData";
import {Prompt} from "react-router-dom";


const AppNew = () => {
    const history = useHistory()
    const form = useForm({defaultValues: appDefaultValues})
    const [dirty, setDirty] = useState(false)
    const [shouldCheckDirty, setShouldCheckDirty] = useState(true)

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])

    const onSubmit = data => {
        if (!appValidate(data, form)) {
            storage.app.edit(
                appPacking(data),
                data.icon[0],
                () => history.push(paths.AppsPage)
            )
        }
    }
    const submit = () => {
        setShouldCheckDirty(false)
        form.handleSubmit(onSubmit)()
    }


    return (
        <>
            <Prompt
                when={dirty && shouldCheckDirty}
                message={'На странице есть несохраненные данные, выйти без сохранения?'}
            />
            <AppForm
                form={form}
                onSubmit={onSubmit}
            />
            <Actions
                align={'center'}
                items={[
                    <Button
                        size={ButtonSizes.BIG}
                        onClick={submit}
                    >
                        Создать
                    </Button>
                ]}
            />
        </>
    );
};

export default AppNew;