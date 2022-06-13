import React from 'react';
import cls from './CheckedTagList.module.scss'
import CheckedTag from "../CheckedTag/CheckedTag";

const CheckedTagList = (
    {
        name,
        register,
        options,
        onChange = () => null,
        onClick = () => null,
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
                            onChange={onChange}
                            onClick={onClick}
                        />
                    </li>
                ))
            }
        </ul>
    );
};

export default CheckedTagList;