import React from 'react';
import TableUI from "../../ui/Table/TableUI/TableUI";
import makeId from "../../../helpers/makeid";
import Checkbox from "../../ui/inputs/Checkbox/Checkbox";
import Table from "../../ui/Table/Table";
import StatusTag from "../../ui/StatusTag/StatusTag";
import MoreButton from "../../ui/MoreButton/MoreButton";

const NotificationTableRow = (
    {
        title,
        status,
        date,
        text,
        owner,
        received,
        ctr,
        register
    }
) => {
    const name = makeId(5)

    return (
        <TableUI.Row>

            <TableUI.Cell>
                <Checkbox name={name} register={register}/>
            </TableUI.Cell>
            <TableUI.Cell>{title}</TableUI.Cell>
            <TableUI.Cell><StatusTag status={status}/></TableUI.Cell>
            <TableUI.Cell>{date}</TableUI.Cell>
            <TableUI.Cell>{text}</TableUI.Cell>
            <TableUI.Cell>{owner}</TableUI.Cell>
            <TableUI.Cell>{received}</TableUI.Cell>
            <TableUI.Cell>{ctr}</TableUI.Cell>
            <TableUI.Cell align={'right'}><MoreButton/></TableUI.Cell>

        </TableUI.Row>
    );
};

export default NotificationTableRow;