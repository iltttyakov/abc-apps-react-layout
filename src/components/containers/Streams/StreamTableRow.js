import React from 'react';
import TableUI from "../../ui/Table/TableUI/TableUI";
import AppName from "../../ui/AppName/AppName";
import StatusTag, {StatusTypes} from "../../ui/StatusTag/StatusTag";
import MoreButton from "../../ui/MoreButton/MoreButton";

const StreamTableRow = (
    {
        appName,
        appIcon,
        ban,
        organic,
        link,
        owner,
        offer,
        i,
        r,
        d,
        i2r,
        r2d,
        i2d,
    }
) => {
    return (
        <TableUI.Row>

            <TableUI.Cell><AppName name={appName} icon={appIcon}/></TableUI.Cell>
            <TableUI.Cell>{ban ? <StatusTag status={StatusTypes.BAN}/> : null}</TableUI.Cell>
            <TableUI.Cell>{organic}</TableUI.Cell>
            <TableUI.Cell>{link}</TableUI.Cell>
            <TableUI.Cell>{owner}</TableUI.Cell>
            <TableUI.Cell>{offer}</TableUI.Cell>
            <TableUI.Cell>{i}</TableUI.Cell>
            <TableUI.Cell>{r}</TableUI.Cell>
            <TableUI.Cell>{d}</TableUI.Cell>
            <TableUI.Cell>{i2r}</TableUI.Cell>
            <TableUI.Cell>{r2d}</TableUI.Cell>
            <TableUI.Cell>{i2d}</TableUI.Cell>
            <TableUI.Cell align={'right'}><MoreButton/></TableUI.Cell>

        </TableUI.Row>
    );
};

export default StreamTableRow;