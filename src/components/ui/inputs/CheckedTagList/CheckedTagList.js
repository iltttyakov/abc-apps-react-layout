import React from 'react';
import cls from './CheckedTagList.module.scss'
import CheckedTag from "../CheckedTag/CheckedTag";

const CheckedTagList = (
    {
        name,
        register,
        options
    }
) => {
    return (
        <ul className={cls.list}>
            {
                options.map((option, i) => (
                    <li className={cls.item} key={i}>
                        <CheckedTag
                            name={name}
                            register={register}
                            key={i}
                            value={option['value']}
                            label={option['label']}
                        />
                    </li>
                ))
            }
        </ul>
    );
};

export default CheckedTagList;