import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import storage from "../../../redux/rootActions";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Table from "../../ui/Table/Table";
import clearFilterParams from "../../../api/clearFilterParams";
import AppName from "../../ui/AppName/AppName";
import StatusTag from "../../ui/StatusTag/StatusTag";
import CheckIcon from "../../ui/CheckIcon/CheckIcon";
import MoreButton from "../../ui/MoreButton/MoreButton";
import CopyClick from "../../ui/CopyClick/CopyClick";


const columns = [
    {
        width: 20,
        name: 'name',
        label: 'Название',
        sortable: true,
        scheme: item => <AppName
            name={item['name']}
            icon={item['icon']}
            linkStore={item['link_store']}
            style={{maxWidth: 230}}
        />
    },
    {
        width: 20,
        name: 'status',
        scheme: item => <StatusTag status={item.status} style={{width: 130}}>{item.status}</StatusTag>,
    },
    {
        width: 20,
        name: 'accs_name',
        label: 'Аккаунт',
        sortable: true,
        scheme: item => <CopyClick>{item['accs_name']}</CopyClick>,
    },
    {
        width: 20,
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
        scheme: item => <MoreButton onClick={() => {
            storage.appManager.modalOpen()
            storage.appManager.get(item.id)
        }}/>,
    }
]


const AppsManagerTable = () => {
    const table = useSelector(state => state.appManager.table)
    const tableFilteredCount = useSelector(state => state.appManager.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.appManager.tableIsLoading)
    const tableForcedUpdate = useSelector(state => state.appManager.tableForcedUpdate)

    const form = useForm({
        defaultValues: {
            search_status: ['опубликовано'],
            length: 50,
            list: 1,
        },
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())

        if (filterParams['search_status'] === '-') delete filterParams['search_status']

        storage.appManager.table(filterParams)
    }

    const searchStatusChangeHandler = (e) => {
        if (e.target.value === '-') {
            form.setValue('search_status', ['-'])
        } else {
            const currentArray = form.getValues('search_status')
            const newArray = currentArray.filter(function (item) {
                return item !== '-'
            })
            form.setValue('search_status', newArray)
        }
    }

    useEffect(filterTable, [])
    useEffect(() => {
        if (tableForcedUpdate) filterTable()
    }, [tableForcedUpdate])

    return (
        <>
            <FilterPanel
                name={'search_status'}
                options={[
                    {value: 'опубликовано', label: 'Опубликовано'},
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

export default AppsManagerTable;

