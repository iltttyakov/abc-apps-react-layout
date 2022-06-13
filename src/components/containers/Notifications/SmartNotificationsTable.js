import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import StatusTag, {StatusTypes} from "../../ui/StatusTag/StatusTag";
import Table from "../../ui/Table/Table";
import {useSelector} from "react-redux";
import clearFilterParams from "../../../api/clearFilterParams";
import actions from "../../../redux/rootActions";
import CopyClick from "../../ui/CopyClick/CopyClick";
import MoreButton from "../../ui/MoreButton/MoreButton";
import storage from "../../../redux/rootActions";
import {urls} from "../../paths";
import Checkbox from "../../ui/inputs/Checkbox/Checkbox";
import PageActions from "../../ui/PageActions/PageActions";
import Button, {ButtonTypes} from "../../ui/Button/Button";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";


const SmartNotificationsTable = () => {
    const table = useSelector(state => state.notification.table)
    const tableFilteredCount = useSelector(state => state.notification.tableFilteredCount)
    const tableIsLoading = useSelector(state => state.notification.tableIsLoading)


    const form = useForm({
        defaultValues: {
            length: 50,
            list: 1,
            page: '1',
            search_status: ['отправлен', 'запланирован']
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
        if (filterParams['search_status'] === '-') delete filterParams['search_status']

        actions.notification.table(filterParams)
    }

    const headingStatusChangeHandler = (e) => {
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

    const columns = [
        {
            width: 5,
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
            width: 10,
            sortable: true,
            label: 'Заголовок',
            name: 'heading',
            scheme: item => <CopyClick>{item.heading}</CopyClick>
        },
        {
            width: 14,
            sortable: true,
            label: 'Дата',
            name: 'heading_date',
            scheme: item => <CopyClick>{item['heading_date']}</CopyClick>
        },
        {
            width: 23,
            sortable: true,
            label: 'Текст',
            name: 'text',
            scheme: item => <CopyClick>{item.text}</CopyClick>
        },
        {
            width: 13,
            sortable: true,
            label: 'Владелец',
            name: 'users_login',
            rights: 'notifications_all',
            scheme: item => <CopyClick>{item['users_login']}</CopyClick>
        },
        {
            width: 9,
            header: 'Получено',
            scheme: item => <CopyClick>{item.successful}</CopyClick>
        },
        {
            width: 4,
            header: 'CTR, %',
            scheme: item => <CopyClick>{item.ctr}</CopyClick>
        },
        {
            name: 'controls',
            align: 'right',
            scheme: item => <MoreButton url={urls.NotificationSinglePage(item.id)}/>,
        }
    ]

    const statistics = () => {
        storage.notification.statistics(checkForm.getValues('check').join(','))
    }


    return (
        <>
            <PageActions>
                <Button
                    shadow={false}
                    type={ButtonTypes.STROKE}
                    onClick={statistics}
                    disabled={checkForm.watch('check').length === 0}
                >
                    Статистика
                </Button>
                <div style={{width: 40}}/>
                <FilterPanel
                    name={'search_status'}
                    options={[
                        {value: 'отправлен', label: 'Отправлен'},
                        {value: 'запланирован', label: 'Запланирован'},
                        {value: 'отменен', label: 'Отменен'},
                        {value: '-', label: 'Все уведомления'},
                    ]}
                    {...form}
                    onChange={e => {
                        headingStatusChangeHandler(e)
                        filterTable()
                    }}
                />
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

export default SmartNotificationsTable;