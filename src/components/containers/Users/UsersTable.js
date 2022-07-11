import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import Table from "../../ui/Table/Table";
import CopyClick from "../../ui/CopyClick/CopyClick";
import {useSelector} from "react-redux";
import clearFilterParams from "../../../api/clearFilterParams";
import actions from "../../../redux/rootActions";
import StatusTag, {StatusTypes} from "../../ui/StatusTag/StatusTag";
import MoreButton from "../../ui/MoreButton/MoreButton";
import storage from "../../../redux/rootActions";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Button from "../../ui/Button/Button";
import Layout from "../../sections/Layout/Layout";


const columns = [
    {
        width: 14,
        label: 'Логин',
        name: 'login',
        sortable: true,
        scheme: item => <CopyClick>{item.login}</CopyClick>
    },
    {
        width: 10,
        scheme: item => item['is_banned'] === 'false'
            ? null
            : <StatusTag style={{width: 50}} status={StatusTypes.BAN}>ban</StatusTag>
    },
    {
        width: 8,
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
        name: 'controls',
        align: 'right',
        scheme: item => <MoreButton onClick={() => {
            storage.user.modalOpen()
            storage.user.get(item.id)
        }}/>
    }
]


const UsersTable = () => {
    const table = useSelector(state => state.user.table)
    const tableFilteredCount = useSelector(state => state.user.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.user.tableIsLoading)
    const tableForcedUpdate = useSelector(state => state.user.tableForcedUpdate)

    const form = useForm({
        defaultValues: {
            length: 50,
            list: 1,
            search_is_banned: false,
        },
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())

        if (filterParams['search_is_banned'] === 'true') {
            delete filterParams['search_is_banned']
        } else {
            filterParams['search_is_banned'] = 'false'
        }

        storage.user.table(filterParams)
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
                    <Button onClick={actions.user.modalOpen}>
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

export default UsersTable;