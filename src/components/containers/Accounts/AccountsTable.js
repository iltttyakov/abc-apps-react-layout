import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Table from "../../ui/Table/Table";
import StatusTag from "../../ui/StatusTag/StatusTag";
import MoreButton from "../../ui/MoreButton/MoreButton";
import storage from "../../../redux/rootActions";
import {useSelector} from "react-redux";
import StoreIcon from "../../ui/StoreIcon/StoreIcon";
import SoftIcon from "../../ui/SoftIcon/SoftIcon";
import clearFilterParams from "../../../api/clearFilterParams";
import CheckIcon from "../../ui/CheckIcon/CheckIcon";
import CopyClick from "../../ui/CopyClick/CopyClick";


const columns = [
    {
        width: 7,
        name: 'search_soft',
        label: 'Soft',
        filterable: true,
        multiple: true,
        options: [
            {label: 'D', value: 'dolphin'},
            {label: 'OB', value: 'octobrowser'},
            {label: 'IC', value: 'incognition'},
            {label: 'ML', value: 'multilogin'},
        ],
        scheme: item => <SoftIcon soft={item.soft}/>
    },
    {
        width: 14,
        name: 'name',
        label: 'Название',
        sortable: true,
        scheme: item => <><span style={{marginRight: '20px'}}>{item.name}</span>
            <StatusTag status={item.status}>{item.status}</StatusTag>
        </>
    },
    {
        width: 9,
        name: 'search_type',
        label: 'Фарм',
        filterable: true,
        multiple: true,
        options: [
            {label: 'Фарм', value: 'farm'},
            {label: 'Не фарм', value: 'not-farm'}
        ],
        scheme: item => <CheckIcon check={item.type === 'farm'}/>
    },
    {
        width: 12,
        name: 'search_store',
        label: 'Store',
        filterable: true,
        multiple: true,
        options: [
            {label: 'PM', value: 'playMarket'},
            {label: 'AS', value: 'appStore'},
            {label: 'H', value: 'huawei'},
        ],
        scheme: item => <StoreIcon store={item.store}/>
    },
    {
        width: 7,
        name: 'proxy_host',
        label: 'Хост',
        scheme: item => <CopyClick>{item['proxy_host']}</CopyClick>
    },
    {
        width: 8,
        name: 'proxy_port',
        label: 'Порт',
        scheme: item => <CopyClick>{item['proxy_port']}</CopyClick>
    },
    {
        width: 8,
        name: 'proxy_login',
        label: 'Логин',
        scheme: item => <CopyClick>{item['proxy_login']}</CopyClick>
    },
    {
        width: 9,
        name: 'proxy_password',
        label: 'Пароль',
        scheme: item => <CopyClick>{item['proxy_password']}</CopyClick>
    },
    {
        width: 8,
        name: '',
        label: 'Домен',
        rights: 'accs_rw',
        scheme: item => <CopyClick>{item['domains_domain']}</CopyClick>
    },
    {
        width: 9,
        name: '',
        label: 'Логин',
        scheme: item => <CopyClick>{item.login}</CopyClick>
    },
    {
        width: 9,
        name: '',
        label: 'Пароль',
        scheme: item => <CopyClick>{item.password}</CopyClick>
    },
    {
        name: 'controls',
        align: 'right',
        // rights: 'accs_r',
        scheme: item => <MoreButton onClick={() => {
            storage.acc.modalOpen()
            storage.acc.get(item.id)
        }}/>
    }
]


const AccountsTable = () => {
    const table = useSelector(state => state.acc.table)
    const tableFilteredCount = useSelector(state => state.acc.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.acc.tableIsLoading)
    const tableForcedUpdate = useSelector(state => state.acc.tableForcedUpdate)


    const form = useForm({
        defaultValues: {
            length: 50,
            list: 1,
        },
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())
        storage.acc.table(filterParams)
    }

    useEffect(() => {
        if (tableForcedUpdate) filterTable()
    }, [tableForcedUpdate])


    return (
        <>
            <FilterPanel
                name={'search_status'}
                options={[
                    {value: 'ready', label: 'Сдан'},
                    {value: 'farm', label: 'Фарм'},
                    {value: 'ban', label: 'Бан'},
                ]}
                {...form}
                onChange={filterTable}
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

export default AccountsTable;