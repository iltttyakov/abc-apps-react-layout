import React from 'react';
import cls from './FilterPanel.module.scss'
import makeId from "../../../helpers/makeid";

const FilterPanel = (
    {
        name,
        options,
        align = 'left',
        register,
        onChange = null,
        style = {},
    }
) => {
    const listCLs = [cls.list]
    if (align === 'right') listCLs.push(cls.alignRight)

    return (
        <ul className={listCLs.join(' ')} style={style}>
            {
                options.map((option, i) => {
                    const id = makeId(5)
                    return (
                        <li className={cls.item} key={i}>
                            <input
                                className={cls.field} type={'checkbox'}
                                id={id} value={option['value']}
                                name={name}
                                {
                                    ...register(name, {
                                        onChange: e => {
                                            onChange(e)
                                        }
                                    })
                                }
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