import React from 'react';
import TableUI from "./TableUI";
import DropDownSelect from "../DropDownSelect/DropDownSelect";
import Pagination from "../Pagination/Pagination";

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
                            Object.keys(columns).map((key, i) => {
                                return (
                                    <TableUI.HeadCell width={columns[key]['header'] ?? null} key={i}>
                                        {columns[key]['header']}
                                    </TableUI.HeadCell>
                                )
                            })
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