import React from 'react';
import Table from "../../ui/Table/TableUI/TableUI";
import AppName from "../../ui/AppName/AppName";
import StatusTag from "../../ui/StatusTag/StatusTag";
import MoreButton from "../../ui/MoreButton/MoreButton";
import StoreIcon from "../../ui/StoreIcon/StoreIcon";
import CheckIcon from "../../ui/CheckIcon/CheckIcon";

const AppTableRow = (
    {
        name,
        icon,
        link_store,
        status,
        id,
        type,
        store,
        accs_name,
        date_create,
        date_approve,
        date_ban,
        mode,
    }
) => {
    return (
        <Table.Row>

            <Table.Cell><AppName name={name} icon={icon} linkStore={link_store}/></Table.Cell>
            <Table.Cell><StatusTag status={status}/></Table.Cell>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell><StoreIcon store={store}/></Table.Cell>
            <Table.Cell>{accs_name}</Table.Cell>
            <Table.Cell>{date_create}</Table.Cell>
            <Table.Cell>{date_approve}</Table.Cell>
            <Table.Cell>{date_ban}</Table.Cell>
            <Table.Cell><CheckIcon check={mode}/></Table.Cell>
            <Table.Cell align={'right'}><MoreButton/></Table.Cell>

        </Table.Row>
    );
};

export default AppTableRow;