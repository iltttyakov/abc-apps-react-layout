import React, {useEffect} from 'react';
import CopyClick from "../../ui/CopyClick/CopyClick";
import MoreButton from "../../ui/MoreButton/MoreButton";
import storage from "../../../redux/rootActions";
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import clearFilterParams from "../../../api/clearFilterParams";
import Table from "../../ui/Table/Table";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Button from "../../ui/Button/Button";
import actions from "../../../redux/rootActions";
import Layout from "../../sections/Layout/Layout";


const columns = [
    {
        width: 20,
        label: 'Логин',
        name: 'login',
        sortable: true,
        scheme: item => <CopyClick>{item.login}</CopyClick>
    },
    {
        width: 20,
        name: 'search_role',
        label: 'Роль',
        filterable: true,
        multiple: true,
        options: [
            {label: 'Админ', value: 'Админ'},
            {label: 'Разработчик', value: 'Разработчик'},
            {label: 'Разработчик iOS', value: 'Разработчик iOS'},
            {label: 'Фармер', value: 'Фармер'},
            {label: 'Заливатор', value: 'Заливатор'},
            {label: 'Байер', value: 'Байер'},
            {label: 'Помощник', value: 'Помощник'},
            {label: 'Покупатель', value: 'Покупатель'},
            {label: 'Арендатор', value: 'Арендатор'},
        ],
        scheme: item => item.role
    },
    {
        width: 20,
        label: 'Баланс',
        name: 'install_balance',
        sortable: true,
        scheme: item => item.install_balance
    },
    {
        name: 'controls',
        align: 'right',
        scheme: item => <MoreButton onClick={() => {
            storage.usersTenant.modalOpen()
            storage.usersTenant.get(item.id)
        }}/>
    }
]

const UsersTenantTable = () => {
    const table = useSelector(state => state.usersTenant.table)
    const tableFilteredCount = useSelector(state => state.usersTenant.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.usersTenant.tableIsLoading)
    const tableForcedUpdate = useSelector(state => state.usersTenant.tableForcedUpdate)

    const form = useForm({
        defaultValues: {
            length: 50,
            list: 1,
            search_is_banned: null,
        },
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())

        if (filterParams['search_is_banned'] === 'true') {
            delete filterParams['search_is_banned']
        } else {
            filterParams['search_is_banned'] = false
        }

        storage.usersTenant.table(filterParams)
    }


    useEffect(filterTable, [])
    useEffect(() => {
        if (tableForcedUpdate) filterTable()
    }, [tableForcedUpdate])


    return (
        <Layout
            title={'Пользователи'}
            actions={
                <div style={{display: 'flex'}}>
                    <FilterPanel
                        name={'search_is_banned'}
                        options={[
                            {label: 'Бан', value: 'true'}
                        ]}
                        {...form}
                        onChange={filterTable}
                        align={'right'}
                        style={{
                            margin: 0,
                            marginRight: 10,
                            padding: 0,
                        }}
                    />
                    <Button onClick={actions.usersTenant.modalOpen}>
                        Добавить нового пользователя
                    </Button>
                </div>
            }
        >
            <Table
                columns={columns}
                data={table}
                count={tableFilteredCount}
                isLoading={tableIsLoading}
                form={form}
                onChange={filterTable}
            />
        </Layout>
    );
};

export default UsersTenantTable;