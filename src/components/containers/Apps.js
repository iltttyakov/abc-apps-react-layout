import React, {useState} from 'react';
import FilterPanel from "../ui/FilterPanel/FilterPanel";
import Page from "../ui/Page/Page";
import AppsTable from "./AppsTable/AppsTable";

const initialFilterList = [
    {
        value: 'publish',
        label: 'Опубликовано',
        checked: true,
    },
    {
        value: 'moderation',
        label: 'На модерации',
        checked: true,
    },
    {
        value: 'ban',
        label: 'Бан',
        checked: false,
    },
    {
        value: 'all',
        label: 'Все приложения',
        checked: false,
    },
]


const Apps = () => {
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

            <AppsTable/>

        </>
    );
};

export default Apps;