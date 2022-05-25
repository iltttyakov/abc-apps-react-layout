import React from 'react';
import TableUI from "../../ui/Table/TableUI/TableUI";
import StoreIcon from "../../ui/StoreIcon/StoreIcon";
import StatusTag from "../../ui/StatusTag/StatusTag";
import MoreButton from "../../ui/MoreButton/MoreButton";

const AccountTableRow = (
    {
        icon,
        name,
        status,
        farm,
        store,
        host,
        port,
        login,
        password,
        domain,
        login2,
        password2,
    }
) => {
    return (
        <TableUI.Row>

            <TableUI.Cell><img src={icon} width={26} height={26} alt={''}/></TableUI.Cell>
            <TableUI.Cell><span style={{marginRight: '20px'}}>{name}</span><StatusTag status={status}/></TableUI.Cell>
            <TableUI.Cell>{farm}</TableUI.Cell>
            <TableUI.Cell><StoreIcon/></TableUI.Cell>
            <TableUI.Cell>{host}</TableUI.Cell>
            <TableUI.Cell>{port}</TableUI.Cell>
            <TableUI.Cell>{login}</TableUI.Cell>
            <TableUI.Cell>{password}</TableUI.Cell>
            <TableUI.Cell>{domain}</TableUI.Cell>
            <TableUI.Cell>{login2}</TableUI.Cell>
            <TableUI.Cell>{password2}</TableUI.Cell>
            <TableUI.Cell align={'right'}><MoreButton/></TableUI.Cell>

        </TableUI.Row>
    );
};

export default AccountTableRow;