import React, {useEffect} from 'react';
import AppName from "../../ui/AppName/AppName";
import MoreButton from "../../ui/MoreButton/MoreButton";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import clearFilterParams from "../../../api/clearFilterParams";
import storage from "../../../redux/rootActions";
import Table from "../../ui/Table/Table";
import Role from "../Role/Role";


const columns = [
    {
        width: 90,
        name: 'name',
        label: 'Название',
        scheme: item => <AppName
            name={item['name']}
            icon={item['icon']}
            linkStore={item['link_store']}
        />
    },
    {
        name: 'controls',
        align: 'right',
        scheme: item => <Role accessTo={'apps_buyer'}>
            <MoreButton onClick={() => {
                storage.appBuyer.modalOpen()
                storage.appBuyer.get(item.id)
            }}/>
        </Role>,
    }
]


const AppsBuyerTable = () => {
    const table = useSelector(state => state.appBuyer.table)
    const tableFilteredCount = useSelector(state => state.appBuyer.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.appBuyer.tableIsLoading)
    const tableForcedUpdate = useSelector(state => state.appBuyer.tableForcedUpdate)

    const form = useForm({
        defaultValues: {
            length: 50,
            list: 1,
        },
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())
        storage.appBuyer.table(filterParams)
    }


    useEffect(filterTable, [])
    useEffect(() => {
        if (tableForcedUpdate) filterTable()
    }, [tableForcedUpdate])

    return (

        <Table
            columns={columns}
            data={table}
            count={tableFilteredCount}
            isLoading={tableIsLoading}
            form={form}
            onChange={filterTable}
        />
    );
};

export default AppsBuyerTable;