import React, {useMemo, useState} from 'react';
import SortingButton from "../../ui/SortingButton/SortingButton";
import Select from "../../ui/Select/Select";
import TableUI from "../../ui/Table/TableUI";
import AppTableRow from "./AppTableRow/AppTableRow";
import DropDownSelect from "../../ui/DropDownSelect/DropDownSelect";
import Pagination from "../../ui/Pagination/Pagination";


import appIcon1 from './app-icons/app-icon-1.png'
import appIcon2 from './app-icons/app-icon-2.png'
import appIcon3 from './app-icons/app-icon-3.png'
import appIcon4 from './app-icons/app-icon-4.png'
import appIcon5 from './app-icons/app-icon-5.png'
import appIcon6 from './app-icons/app-icon-6.png'
import Table from "../../ui/Table/Table";

const appTypeInitialFilter = [
    {
        label: 'Белое',
        value: 'white',
        checked: true,
    },
    {
        label: 'Серое',
        value: 'grey',
        checked: false,
    },
]


const storeInitialFilter = [
    {
        label: 'PM',
        value: 'PM',
        checked: true,
    },
    {
        label: 'AS',
        value: 'AS',
        checked: false,
    },
    {
        label: 'H',
        value: 'H',
        checked: false,
    },
]

const appList = [
    {
        appName: 'App Name',
        appIcon: appIcon1,
        status: 'publish',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon2,
        status: 'ban',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon3,
        status: 'moderation',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon4,
        status: 'moderation',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon5,
        status: 'ban',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
    {
        appName: 'App Name',
        appIcon: appIcon6,
        status: 'publish',
        id: 510,
        type: 'Белое',
        store: 'google',
        account: 'a320user',
        publishDate: '18.03.2022',
        approveDate: '22.03.2022',
        banDate: '30.03.2022',
        organic: true,
    },
]


const AppsTable = () => {
    let [organic, setOrganic] = useState(true)
    let [appTypeFilter, setAppTypeFilter] = useState(appTypeInitialFilter)
    const changeAppTypeHandler = (newValue) => {
        const newAppTypeFilter = [...appTypeFilter]
        newAppTypeFilter.forEach(item => {
            item['checked'] = item['value'] === newValue
        })
        setAppTypeFilter(newAppTypeFilter)
    }

    let [storeFilter, setStoreFilter] = useState(storeInitialFilter)
    const changeStoreHandler = (newValue) => {
        const newStoreFilter = [...storeFilter]
        newStoreFilter.forEach(item => {
            item['checked'] = item['value'] === newValue
        })
        setStoreFilter(newStoreFilter)
    }


    const columns = [
        {
            header: <SortingButton>
                Название
            </SortingButton>,
            width: 14,
        },
        {
            header: null,
            width: 10,
        },
        {
            header: <SortingButton>
                ID
            </SortingButton>,
            width: 6,
        },
        {
            header: <Select
                multiple={TableUI.Rowue}
                items={appTypeFilter}
                label={'Белое'}
                onChange={changeAppTypeHandler}
            />,
            width: 8,
        },
        {
            header: <Select
                multiple={true}
                items={storeFilter}
                label={'PM'}
                onChange={changeStoreHandler}
            />,
            width: 7,
        },
        {
            header: <SortingButton>Аккаунт</SortingButton>,
            width: 11
        },
        {
            header: <SortingButton>Залив</SortingButton>,
            width: 9
        },
        {
            header: <SortingButton>Апрув</SortingButton>,
            width: 9
        },
        {
            header: <SortingButton>Бан</SortingButton>,
            width: 9
        },
        {
            header: <Select
                multiple={false}
                items={[
                    {
                        label: 'Органика',
                        value: TableUI.Rowue,
                        checked: organic,
                    },
                    {
                        label: 'Нет',
                        value: false,
                        checked: !organic,
                    },
                ]}
                label={organic ? 'Органика' : 'Нет'}
                onChange={(newValue) => setOrganic(newValue)}
            />,
        },
        {
            header: null
        }
    ]

    const data = Object.keys(appList).map((key, i) => {
        return (
            <AppTableRow
                key={i}
                appName={appList[key]['appName']}
                appIcon={appList[key]['appIcon']}
                status={appList[key]['status']}
                id={appList[key]['id']}
                type={appList[key]['type']}
                store={appList[key]['store']}
                account={appList[key]['account']}
                publishDate={appList[key]['publishDate']}
                approveDate={appList[key]['approveDate']}
                banDate={appList[key]['banDate']}
                organic={appList[key]['organic']}
            />
        )
    })


    return (
        <Table columns={columns} data={data}/>
    );
};

export default AppsTable;