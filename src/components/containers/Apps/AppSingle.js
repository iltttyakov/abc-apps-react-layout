import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Button, {ButtonSizes, ButtonTypes} from "../../ui/Button/Button";
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";
import AppForm from "./AppForm";
import Actions from "../../ui/Actions/Actions";
import {deleteConfirm} from "../../../helpers/swal";
import {Prompt, useHistory} from "react-router-dom";
import paths from "../../paths";
import Loader from "../../ui/Loader/Loader";
import {appDefaultValues, appPacking, appUnpacking, appValidate} from "./appData";


const AppSingle = ({id}) => {
    const app = useSelector(state => state.app.active)
    const isLoading = useSelector(state => state.app.activeIsLoading)
    const [dirty, setDirty] = useState(false)
    const [shouldCheckDirty, setShouldCheckDirty] = useState(true)
    const history = useHistory()

    const form = useForm({defaultValues: appDefaultValues})

    useEffect(() => storage.app.get(id), [])

    useEffect(() => {
        form.reset(appUnpacking(app))
    }, [app])

    useEffect(() => {
        setDirty(form.formState.isDirty)
    }, [form.watch()])

    const onSubmit = data => {
        if (!appValidate(data, form)) {
            storage.app.edit(
                appPacking(data, app),
                data.icon[0],
                () => history.push(paths.AppsPage)
            )
        }
    }
    const submit = () => {
        setShouldCheckDirty(false)
        form.handleSubmit(onSubmit)()
    }

    const del = () => {
        deleteConfirm(() => {
            setShouldCheckDirty(false)
            storage.app.del(app.id)
            history.push(paths.AppsPage)
        })
    }

    return (
        <Loader process={isLoading}>
            <Prompt
                when={dirty && shouldCheckDirty}
                message={'На странице есть несохраненные данные, выйти без сохранения?'}
            />
            <AppForm form={form} onSubmit={onSubmit} app={app}/>
            <Actions
                align={'center'}
                items={[
                    <Button
                        type={ButtonTypes.STROKE}
                        size={ButtonSizes.BIG}
                        buttonType={'button'}
                        onClick={del}
                    >
                        Удалить
                    </Button>,
                    <Button
                        type={ButtonTypes.FILL}
                        size={ButtonSizes.BIG}
                        buttonType={'button'}
                        onClick={submit}
                    >
                        Сохранить
                    </Button>
                ]}
            />
        </Loader>
    );
};

export default AppSingle;