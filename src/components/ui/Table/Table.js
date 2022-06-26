import React from 'react';
import TableUI from "./TableUI/TableUI";
import DropDown from "../inputs/DropDown/DropDown";
import Pagination from "../Pagination/Pagination";
import TableSortingButton from "./TableSortingButton/TableSortingButton";
import TableSelect from "./TableSelect/TableSelect";
import TableSearch from "./TableSearch/TableSearch";
import Role from "../../containers/Role/Role";


const createSortableHeadCell = ({label, name, form, orderName, orderByName, onChange}) =>
    <TableSortingButton
        orderByName={orderByName}
        orderName={orderName}
        value={name}
        label={label}
        {...form}
        onChange={onChange}
    />

const createFilterableHeadCell = ({name, label, options, multiple, form, onChange,}) =>
    <TableSelect
        name={name}
        label={label}
        options={options}
        multiple={multiple}
        {...form}
        onChange={onChange}
    />


const Table = (
    {
        columns,
        data,
        count,
        form,
        onChange,
        isLoading,

        orderName = 'order',
        orderByName = 'sort_by',
        lengthName = 'length',
        paginationName = 'list',
        searchName = 'search',
    }
) => {
    const onPagination = newPage => {
        form.setValue(paginationName, newPage)
        onChange(false)
    }

    const head = columns.map((column, i) => {
        let inner = null

        if (column.filterable) {
            inner = createFilterableHeadCell({...column, form, onChange})
        } else if (column.sortable) {
            inner = createSortableHeadCell({...column, orderByName, orderName, form, onChange})
        } else if (column.label) {
            inner = column.label
        }

        return <Role accessTo={column.rights} key={i}>
            <TableUI.HeadCell width={column.width}>{inner}</TableUI.HeadCell>
        </Role>
    })


    const body = data.length
        ? data.map((item, i) => {

            const cells = columns.map((column, k) =>
                <Role accessTo={column.rights} key={k}>
                    <TableUI.Cell
                        width={column.width}
                        align={column.align ? column.align : 'left'}
                    >
                        {column.scheme(item)}
                    </TableUI.Cell>
                </Role>
            )

            return <TableUI.Row key={i} failed={item.failed}>{cells}</TableUI.Row>
        })
        : <TableUI.NotFound/>


    return (
        <>
            <TableUI.Box>

                <TableUI.Loader isLoading={isLoading}/>

                <TableSearch
                    name={searchName}
                    register={form.register}
                    onChange={onChange}
                />

                <TableUI.Table>
                    <TableUI.Head>
                        <TableUI.Row>{head}</TableUI.Row>
                    </TableUI.Head>
                    <TableUI.Body>
                        {body}
                    </TableUI.Body>
                </TableUI.Table>

                <TableUI.Footer>

                    <TableUI.ShowCount>
                        <DropDown
                            position={'top'}
                            {...form}
                            name={lengthName}
                            onChange={onChange}
                        />
                    </TableUI.ShowCount>

                    <TableUI.Pagination>
                        <Pagination
                            current={form.getValues(paginationName)}
                            count={Math.ceil(count / form.getValues(lengthName))}
                            onPagination={onPagination}
                        />
                    </TableUI.Pagination>

                </TableUI.Footer>

            </TableUI.Box>
        </>
    );
};

export default Table;