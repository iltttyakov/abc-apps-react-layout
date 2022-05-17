import React from 'react';
import cls from './FilterPanel.module.scss'
import makeId from "../../../helpers/makeid";




const FilterPanel = (
    {
        list,
        onChange
    }
) => {
    return (
        <ul className={cls.list}>
            {
                    Object.keys(list).map((key, i) => {
                        const id = makeId(5)

                        return (
                            <li className={cls.item} key={i}>
                                <input
                                    className={cls.field}
                                    type={'checkbox'}
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
    );
};

export default FilterPanel;