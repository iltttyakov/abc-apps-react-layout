import React from 'react';
import TableUI from "../../ui/Table/TableUI/TableUI";

const LogTableRow = (
    {
        id,
        appIcon,
        appName,
        date,
        message,
        message2,
        request,
        host
    }
) => {
    return (
        <TableUI.Row>

            <TableUI.Cell>{id}</TableUI.Cell>
            <TableUI.Cell><img src={appIcon} width={26} height={26} alt={''}/></TableUI.Cell>
            <TableUI.Cell>{appName}</TableUI.Cell>
            <TableUI.Cell>
                <span style={{color: '#5030E5'}}>{date}</span>
            </TableUI.Cell>
            <TableUI.Cell>{message}</TableUI.Cell>
            <TableUI.Cell>{message2}</TableUI.Cell>
            <TableUI.Cell>
                <span style={{color: '#78BD7E'}}>{request}</span>
            </TableUI.Cell>
            <TableUI.Cell>{host}</TableUI.Cell>

        </TableUI.Row>
    );
};

export default LogTableRow;