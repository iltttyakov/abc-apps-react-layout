import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";
import {urls} from "../../paths";

import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Table from "../../ui/Table/Table";
import clearFilterParams from "../../../api/clearFilterParams";
import AppName from "../../ui/AppName/AppName";
import StatusTag from "../../ui/StatusTag/StatusTag";
import StoreIcon from "../../ui/StoreIcon/StoreIcon";
import CheckIcon from "../../ui/CheckIcon/CheckIcon";
import MoreButton from "../../ui/MoreButton/MoreButton";
import CopyClick from "../../ui/CopyClick/CopyClick";
import Role from "../Role/Role";
import RoleFunc from "../Role/RoleFunc";
import inArray from "../../../helpers/inArray";


const columns = [
    {
        width: 15,
        name: 'name',
        label: 'Название',
        sortable: true,
        scheme: item => <AppName
            name={item['name']}
            icon={item['icon']}
            linkStore={item['link_store']}
            style={{maxWidth: 180}}
        />
    },
    {
        width: 6,
        name: 'status',
        scheme: item => <StatusTag status={item.status}>{item.status}</StatusTag>,
    },
    {
        width: 8,
        name: 'id',
        label: 'ID',
        sortable: true,
        scheme: item => item.id,
    },
    {
        width: 7,
        name: 'search_type',
        label: 'Тип',
        filterable: true,
        multiple: true,
        options: [
            {label: 'Белое', value: 'белое'},
            {label: 'Серое', value: 'серое'}
        ],
        scheme: item => item.type,
    },
    {
        width: 6,
        name: 'search_store',
        label: 'Store',
        filterable: true,
        multiple: true,
        options: [
            {label: 'PM', value: 'PM'},
            {label: 'AS', value: 'AS'},
            {label: 'H', value: 'H'},
        ],
        scheme: item => <StoreIcon store={item.store}/>,
    },
    {
        width: 9,
        name: 'accs_name',
        label: 'Аккаунт',
        sortable: true,
        scheme: item => <CopyClick>{item['accs_name']}</CopyClick>,
    },
    {
        width: 9,
        name: 'date_create',
        label: 'Залив',
        sortable: true,
        scheme: item => <CopyClick>{item['date_create']}</CopyClick>,
    },
    {
        width: 9,
        name: 'date_approve',
        label: 'Апрув',
        sortable: true,
        scheme: item => <CopyClick>{item['date_approve']}</CopyClick>,
    },
    {
        width: 9,
        name: 'date_ban',
        label: 'Бан',
        sortable: true,
        scheme: item => <CopyClick>{item['date_ban']}</CopyClick>,
    },
    {
        width: 11,
        name: 'search_mode',
        label: 'Органика',
        filterable: true,
        multiple: true,
        rights: 'streams_all',
        options: [
            {label: 'Органика', value: 'true'},
            {label: 'Нет', value: 'false'}
        ],
        scheme: item => <CheckIcon check={item.mode === 'true'}/>,
    },
    {
        align: 'right',
        name: 'controls',
        scheme: item =>
            <RoleFunc callback={rights => {
                if (item.type === 'серое') {
                    return inArray(rights, 'grey_r') || inArray(rights, 'grey_rw')
                } else {
                    return inArray(rights, 'white_r') || inArray(rights, 'white_rw')
                }
            }}>
                <MoreButton url={urls.AppSinglePage(item.id)}/>
            </RoleFunc>,
    }
]


const AppsTable = () => {
    const table = useSelector(state => state.app.table)
    const tableFilteredCount = useSelector(state => state.app.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.app.tableIsLoading)

    const form = useForm({
        defaultValues: {
            search_status: ['опубликовано', 'на модерации'],
            search_type: 'серое',
            length: 50,
            list: 1,
        },
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())

        if (filterParams['search_status'] === '-') delete filterParams['search_status']

        storage.app.table(filterParams)
    }

    const searchStatusChangeHandler = (e) => {
        if (e.target.value === '-') {
            form.setValue('search_status', ['-'])
            form.setValue('search_type', ['серое', 'белое'])
        } else {
            const currentArray = form.getValues('search_status')
            const newArray = currentArray.filter(function (item) {
                return item !== '-'
            })
            form.setValue('search_status', newArray)
        }
    }

    useEffect(filterTable, [])

    return (
        <>
            <FilterPanel
                name={'search_status'}
                options={[
                    {value: 'опубликовано', label: 'Опубликовано'},
                    {value: 'на модерации', label: 'На модерации'},
                    {value: 'забанено', label: 'Бан'},
                    {value: '-', label: 'Все приложения'},
                ]}
                {...form}
                onChange={e => {
                    searchStatusChangeHandler(e)
                    filterTable()
                }}
            />

            <Table
                columns={columns}
                data={table}
                count={tableFilteredCount}
                isLoading={tableIsLoading}
                form={form}
                onChange={filterTable}
            />

        </>
    );
};

export default AppsTable;

