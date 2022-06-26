import React, {useEffect} from 'react';
import Table from "../../ui/Table/Table";
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import clearFilterParams from "../../../api/clearFilterParams";
import storage from "../../../redux/rootActions";
import CopyClick from "../../ui/CopyClick/CopyClick";
import MoreButton from "../../ui/MoreButton/MoreButton";
import Actions from "../../ui/Actions/Actions";
import Button, {ButtonTypes} from "../../ui/Button/Button";
import Checkbox from "../../ui/inputs/Checkbox/Checkbox";
import PageActions from "../../ui/PageActions/PageActions";


const DomainsTable = () => {
    const table = useSelector(state => state.domain.table)
    const tableFilteredCount = useSelector(state => state.domain.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.domain.tableIsLoading)
    const tableForcedUpdate = useSelector(state => state.domain.tableForcedUpdate)

    const form = useForm({
        defaultValues: {
            length: 50,
            list: 1,
        },
    })
    const checkForm = useForm({
        defaultValues: {
            'select-all': false,
            'check': []
        }
    })

    const filterTable = (resetPagination = true) => {
        if (resetPagination) form.setValue('list', 1)
        const filterParams = clearFilterParams(form.getValues())

        checkForm.reset()

        storage.domain.table(filterParams)
    }

    useEffect(filterTable, [])
    useEffect(() => {
        if (tableForcedUpdate) filterTable()
    }, [tableForcedUpdate])


    const columns = [
        {
            width: 10,
            checkable: true,
            label: <Checkbox
                name={'select-all'}
                value={'all'}
                register={checkForm.register}
                onChange={e => {
                    if (e.target.checked) {
                        checkForm.setValue('check', table.map(({id}) => id))
                    } else {
                        checkForm.setValue('check', [])
                    }
                }}
            />,
            scheme: item => <Checkbox
                name={'check'}
                value={item.id}
                register={checkForm.register}
                onChange={e => {
                    if (checkForm.getValues('check').length !== table.length) {
                        checkForm.setValue('select-all', false)
                    } else {
                        checkForm.setValue('select-all', true)
                    }
                }}
            />
        },
        {
            width: 45,
            name: 'domain',
            label: 'Домен',
            sortable: true,
            scheme: item => <CopyClick>{item.domain}</CopyClick>,
        },
        {
            width: 45,
            name: 'accs_id',
            label: 'Аккаунт',
            sortable: true,
            scheme: item => <CopyClick>{item['accs_name']}</CopyClick>,
        },
        {
            name: 'controls',
            scheme: item => <MoreButton onClick={() => {
                storage.domain.modalOpen()
                storage.domain.get(item.id)
            }}/>
        }
    ]

    const checkDomains = () => {
        storage.domain.check(checkForm.getValues('check').join(','))
        checkForm.reset()
    }


    return (
        <>
            <PageActions>
                <Button
                    shadow={false}
                    type={ButtonTypes.STROKE}
                    onClick={checkDomains}
                    disabled={checkForm.watch('check').length === 0}
                >
                    Проверить
                </Button>
            </PageActions>
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

export default DomainsTable;