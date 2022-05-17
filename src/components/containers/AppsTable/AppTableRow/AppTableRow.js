import React from 'react';
import Table from "../../../ui/Table/TableUI";
import AppName from "../../../ui/AppName/AppName";
import StatusTag from "../../../ui/StatusTag/StatusTag";
import storeIcon from "../store-icon.png";
import Icons from "../../../ui/Icons/Icons";
import MoreButton from "../../../ui/MoreButton/MoreButton";

const AppTableRow = (
    {
        appName,
        appIcon,
        status,
        id,
        type,
        store,
        account,
        publishDate,
        approveDate,
        banDate,
        organic,
    }
) => {
    return (
        <Table.Row>

            <Table.Cell>
                <AppName
                    name={appName}
                    icon={appIcon}
                />
            </Table.Cell>

            <Table.Cell>
                <StatusTag status={status}/>
            </Table.Cell>

            <Table.Cell>
                {id}
            </Table.Cell>

            <Table.Cell>
                {type}
            </Table.Cell>

            <Table.Cell>
                <img src={storeIcon} width={32} height={32} alt={''}/>
            </Table.Cell>

            <Table.Cell>{account}</Table.Cell>
            <Table.Cell>{publishDate}</Table.Cell>
            <Table.Cell>{approveDate}</Table.Cell>
            <Table.Cell>{banDate}</Table.Cell>
            <Table.Cell>
                {
                    organic
                        ? <Icons name={'check'} size={24}/>
                        : null
                }
            </Table.Cell>
            <Table.Cell align={'right'}>
                <MoreButton/>
            </Table.Cell>


        </Table.Row>
    );
};

export default AppTableRow;