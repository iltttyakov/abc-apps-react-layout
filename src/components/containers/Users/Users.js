import React from 'react';
import {StatusTypes} from "../../ui/StatusTag/StatusTag";
import {useForm} from "react-hook-form";
import Table from "../../ui/Table/Table";
import UserTableRow from "./UserTableRow";


const users = [
    {
        login: 'Логин',
        role: 'Роль'
    },
    {
        login: 'Логин',
        status: StatusTypes.BAN,
        role: 'Роль'
    },
    {
        login: 'Логин',
        status: StatusTypes.BAN,
        role: 'Роль'
    },
]

const Users = () => {
    const form = useForm()

    const columns = [
        {
            width: 14,
            sortable: true,
            sorting: {
                label: 'Логин',
                name: 'login',
                ...form
            }
        },
        {},
        {
            width: 8,
            filterable: true,
            filter: {
                name: 'role',
                label: 'Роль',
                options: [
                    {label: 'Амин', value: 'admin'},
                    {label: 'Модер', value: 'moder'},
                    {label: 'Фармер', value: 'farmer'}
                ],
                ...form
            }
        },
        {}
    ]

    return (
        <Table
            columns={columns}
            data={users.map((user, i) => <UserTableRow {...user} key={i}/>)}
        />
    );
};

export default Users;