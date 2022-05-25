import React from 'react';
import cls from './RadioButtonList.module.scss'
import RadioButton from "../RadioButton/RadioButton";


export const RadioButtonListLabelPosition = {
    TOP: 'top', LEFT: 'left'
}


const RadioButtonList = (
    {
        options,
        name,
        register,
        label = null,
        labelPosition = RadioButtonListLabelPosition.TOP
    }
) => {
    return (
        <div
            className={[cls.box, labelPosition === RadioButtonListLabelPosition.LEFT ? cls.row : null].join(' ')}
        >

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

export default RadioButtonList;