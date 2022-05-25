import React from 'react';
import TableUI from "../../ui/Table/TableUI/TableUI";
import StatusTag from "../../ui/StatusTag/StatusTag";
import MoreButton from "../../ui/MoreButton/MoreButton";

const UserTableRow = (
    {
        login,
        status,
        role,
    }
) => {
    return (
        <TableUI.Row>

            <TableUI.Cell>{login}</TableUI.Cell>
            <TableUI.Cell>
                {
                    status
                        ? <StatusTag status={status}/>
                        : null
                }
            </TableUI.Cell>
            <TableUI.Cell>{role}</TableUI.Cell>
            <TableUI.Cell align={'right'}><MoreButton/></TableUI.Cell>

        </TableUI.Row>
    );
};

export default UserTableRow;