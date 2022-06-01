import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Page from "../../ui/Page/Page";
import Table from "../../ui/Table/Table";
import AppTableRow from "./AppTableRow";

import {useSelector} from "react-redux";
import storage from "../../../redux/storage";
import TableUI from "../../ui/Table/TableUI/TableUI";
import TableSortingButton from "../../ui/Table/TableSortingButton/TableSortingButton";
import TableSelect from "../../ui/Table/TableSelect/TableSelect";


const Apps = () => {
    const app = useSelector(state => state.app)

    useEffect(() => {
        storage.app.table({
            // list: "1",
            // length: "10",
            // search: "string",
            // sort_by: "icon",
            // order: "asc",
            // search_type: "белое",
            // search_store: "PM",
            // search_mode: "true",
            // search_status: "забанено"
        })
    }, [])

    const form = useForm({
        defaultValues: {
            filter: ['publish', 'moderation']
        },
    })

    const tableHead = <TableUI.Row>
        <TableUI.HeadCell width={10}>
            <TableSortingButton
                name={'name'}
                label={'Название'}
                {...form}
            />
        </TableUI.HeadCell>
        <TableUI.HeadCell width={6}/>
        <TableUI.HeadCell width={8}>
            <TableSortingButton
                name={'id'}
                label={'ID'}
                {...form}
            />
        </TableUI.HeadCell>
        <TableUI.HeadCell width={7}>
            <TableSelect
                name={'type'}
                label={'Тип'}
                options={[
                    {label: 'Белое', value: 'white'},
                    {label: 'Серое', value: 'grey'}
                ]}
                multiple={true}
                {...form}
            />
        </TableUI.HeadCell>
        <TableUI.HeadCell width={11}>
            <TableSelect
                name={'store'}
                label={'Store'}
                options={[
                    {label: 'PM', value: 'PM'},
                    {label: 'AS', value: 'AS'},
                    {label: 'H', value: 'H'},
                ]}
                multiple={true}
                {...form}
            />
        </TableUI.HeadCell>
        <TableUI.HeadCell width={9}>
            <TableSortingButton
                name={'account'}
                label={'Аккаунт'}
                {...form}
            />
        </TableUI.HeadCell>
        <TableUI.HeadCell width={9}>
            <TableSortingButton
                name={'create'}
                label={'Залив'}
                {...form}
            />
        </TableUI.HeadCell>
        <TableUI.HeadCell width={9}>
            <TableSortingButton
                name={'approve'}
                label={'Апрув'}
                {...form}
            />
        </TableUI.HeadCell>
        <TableUI.HeadCell>
            <TableSortingButton
                name={'ban'}
                label={'Бан'}
                {...form}
            />
        </TableUI.HeadCell>
        <TableUI.HeadCell>
            <TableSelect
                name={'organic'}
                label={'Органика'}
                options={[
                    {label: 'Органика', value: 'organic'},
                    {label: 'Нет', value: 'not-organic'}
                ]}
                {...form}
            />
        </TableUI.HeadCell>
    </TableUI.Row>

    return (
        <>
            <Page.Top margin={38}>
                {/*<FilterPanel*/}
                {/*    name={'filter'}*/}
                {/*    register={register('filter')}*/}
                {/*    options={[*/}
                {/*        {value: 'publish', label: 'Опубликовано'},*/}
                {/*        {value: 'moderation', label: 'На модерации'},*/}
                {/*        {value: 'ban', label: 'Бан'},*/}
                {/*        {value: 'all', label: 'Все приложения'},*/}
                {/*    ]}*/}
                {/*/>*/}
            </Page.Top>

            <Table
                // columns={columns2}
                head={tableHead}
                data={app.table.map(
                    (app, i) => <AppTableRow key={i} {...app} />
                )}
            />

        </>
    );
};

export default Apps;