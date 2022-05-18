import React from 'react';
import cls from './FilterPanel.module.scss'
import makeId from "../../../helpers/makeid";

const FilterPanel = (
    {
        name,
        options,
        register,
    }
) => {
    return (
        <ul className={cls.list}>
            {
                options.map((option, i) => {
                    const id = makeId(5)
                    return (
                        <li className={cls.item} key={i}>
                            <input
                                className={cls.field} type={'checkbox'}
                                id={id} value={option['value']}
                                name={name} {...register(name)}
                            />
                            <label className={cls.label} htmlFor={id}>
                                {option['label']}
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default FilterPanel;