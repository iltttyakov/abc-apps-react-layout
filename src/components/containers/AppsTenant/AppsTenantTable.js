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
        scheme: item => <AppName name={item['name']} icon={item['icon']} linkStore={item['link_store']}/>
    },
    {
        name: 'controls',
        align: 'right',
        scheme: item => <Role accessTo={item.type === 'серое' ? 'grey_rw' : 'white_rw'}>
            <MoreButton onClick={() => {
                storage.appTenant.modalOpen()
                storage.appTenant.get(item.id)
            }}/>
        </Role>,
    }
]


const AppsTenantTable = () => {
    const table = useSelector(state => state.appTenant.table)
    const tableFilteredCount = useSelector(state => state.appTenant.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.appTenant.tableIsLoading)

    const form = useForm({
        defaultValues: {
            length: 50,
            list: 1,
        },
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())
        storage.appTenant.table(filterParams)
    }

    useEffect(() => {
        filterTable()
    }, [])

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

export default AppsTenantTable;