import React from 'react';
import TableUI from "./TableUI/TableUI";
import DropDownSelect from "../inputs/DropDownSelect/DropDownSelect";
import Pagination from "../Pagination/Pagination";
import TableSortingButton from "./TableSortingButton/TableSortingButton";
import TableSelect from "./TableSelect/TableSelect";


const createSortingHeader = (
    {
        name,
        label,
        register,
        setValue,
        getValues,
    }
) => {
    return (
        <TableSortingButton
            name={name}
            register={register}
            setValue={setValue}
            getValues={getValues}
        >
            {label}
        </TableSortingButton>
    )
}

const createFilteringHeader = (
    {
        options,
        name,
        register,
        label,
        getValues,
        multiple = false,
    }
) => {
    return (
        <TableSelect
            name={name}
            register={register}
            label={label}
            options={options}
            multiple={multiple}
            getValues={getValues}
        />
    )
}


const Table = (
    {
        columns,
        data,
    }
) => {
    return (
        <TableUI.Box>
            <TableUI.Table>
                <TableUI.Head>
                    <TableUI.Row>
                        {
                            columns
                                ? columns.map((column, i) => {
                                    let content = ''

                                    if (column['sortable']) {
                                        content = createSortingHeader({...column['sorting']})
                                    } else if (column['filterable']) {
                                        content = createFilteringHeader({...column['filter']})
                                    } else if (column['header']) {
                                        content = column['header']
                                    }

                                    return (
                                        <TableUI.HeadCell width={column['width'] ?? null} key={i}>
                                            {content}
                                        </TableUI.HeadCell>
                                    )
                                })
                                : null
                        }
                    </TableUI.Row>
                </TableUI.Head>

                <TableUI.Body>
                    {data}
                </TableUI.Body>

            </TableUI.Table>

            <TableUI.Footer>

                <TableUI.ShowCount>
                    <DropDownSelect/>
                </TableUI.ShowCount>

                <TableUI.Pagination>
                    <Pagination/>
                </TableUI.Pagination>

            </TableUI.Footer>

        </TableUI.Box>
    );
};

export default Table;