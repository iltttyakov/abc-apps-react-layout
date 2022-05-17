import React, {useState} from 'react';
import Page from "../../ui/Page/Page";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";

const initialFilterList = [
    {
        value: 'handed-over',
        label: 'Сдан',
        checked: true,
    },
    {
        value: 'farm',
        label: 'Фарм',
        checked: true,
    },
    {
        value: 'ban',
        label: 'Бан',
        checked: false,
    },
]

const Accounts = () => {
    let [filterList, setFilterList] = useState(initialFilterList)

    const filterOnChangeHandler = (newValue) => {
        const newFilterList = [...filterList]
        newFilterList.forEach(item => {
            if (newValue === 'all') {
                item['checked'] = item['value'] === 'all'
            } else {
                if (item['value'] === 'all') {
                    item['checked'] = false
                } else if (item['value'] === newValue) {
                    item['checked'] = !item['checked']
                }
            }

        })
        setFilterList(newFilterList)
    }

    return (
        <>

            <Page.Top margin={38}>
                <FilterPanel
                    list={filterList}
                    onChange={filterOnChangeHandler}
                />
            </Page.Top>

        </>

    );
};

export default Accounts;