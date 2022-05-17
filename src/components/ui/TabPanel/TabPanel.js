import React from 'react';
import cls from './TabPanel.module.scss'
import makeId from "../../../helpers/makeid";


const TabPanel = (
    {
        list,
        className,
        onChange
    }
) => {
    const name = makeId(5)

    return (
        <div className={[cls.box, className].join(' ')}>
            <ul className={cls.list}>

                {
                    Object.keys(list).map((key, i) => {
                        const id = makeId(5)
                        return (
                            <li className={cls.item} key={i}>
                                <input
                                    className={cls.field}
                                    type={'radio'}
                                    id={id}
                                    value={list[key]['value']}
                                    name={name}
                                    onChange={() => {
                                        onChange(list[key]['value'])
                                    }}
                                    checked={list[key]['checked']}
                                />
                                <label
                                    className={cls.label}
                                    htmlFor={id}
                                >
                                    {list[key]['label']}
                                </label>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default TabPanel;