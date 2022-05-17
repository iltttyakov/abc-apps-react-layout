import React from 'react';
import cls from './RadioGroup.module.scss'
import RadioButton from "../RadioButton/RadioButton";


const RadioGroup = (
    {
        options,
        name,
        register,
        label = null,
    }
) => {
    return (
        <div className={cls.box}>

            {
                label
                    ? <p className={cls.label}>
                        {label}
                    </p>
                    : null
            }

            <ul className={cls.list}>
                {
                    options.map((option, i) =>
                        <li className={cls.item} key={i}>
                            <RadioButton
                                name={name}
                                value={option['value']}
                                label={option['label']}
                                register={register}
                            />
                        </li>
                    )
                }
            </ul>

        </div>
    );
};

export default RadioGroup;