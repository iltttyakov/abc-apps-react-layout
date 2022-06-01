import React from 'react';
import TableUI from "./TableUI/TableUI";
import DropDownSelect from "../inputs/DropDownSelect/DropDownSelect";
import Pagination from "../Pagination/Pagination";
import TableSortingButton from "./TableSortingButton/TableSortingButton";
import TableSelect from "./TableSelect/TableSelect";
import Checkbox from "../inputs/Checkbox/Checkbox";
import makeId from "../../../helpers/makeid";


const Table = (
    {
        columns,
        data,
        head,
    }
) => {
    return (
        <TableUI.Box>
            <TableUI.Table>
                <TableUI.Head>
                    {/*<TableUI.Row>*/}
                    {head}
                    {/*</TableUI.Row>*/}
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