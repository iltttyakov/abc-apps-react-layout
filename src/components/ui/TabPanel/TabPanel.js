import React from 'react';
import cls from './TabPanel.module.scss'
import makeId from "../../../helpers/makeid";


const TabPanel = (
    {
        className,
        register,
        name,
        options,
        onChange = (value) => {}
    }
) => {
    return (
        <div className={[cls.box, className].join(' ')}>
            <ul className={cls.list}>

                {
                    options.map((option, i) => {
                        const id = makeId(5)
                        return (
                            <li className={cls.item} key={i}>
                                <input
                                    className={cls.field}
                                    type={'radio'}
                                    id={id}
                                    value={option['value']}
                                    name={name}
                                    {...register(name)}
                                    onChange={() => {
                                        onChange(option['value'])
                                    }}
                                />
                                <label
                                    className={cls.label}
                                    htmlFor={id}
                                >
                                    {option['label']}
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