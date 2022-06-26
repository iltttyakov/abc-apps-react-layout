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
        errors = null,
        label = null,
        labelPosition = RadioButtonListLabelPosition.TOP,
        validation = {}
    }
) => {
    return (
        <div className={[
            cls.box,
            labelPosition === RadioButtonListLabelPosition.LEFT ? cls.row : null
        ].join(' ')}>

            <div className={cls.container}>
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
                                    validation={validation}
                                    errors={errors}
                                    disabled={option['disable'] ?? false}
                                />
                            </li>
                        )
                    }
                </ul>
            </div>


            {
                errors
                    ? <span className={cls.errorText}>
                        {errors[name]?.type === 'required' && 'Обязательное поле'}
                    </span>
                    : null
            }
        </div>
    );
};

export default RadioButtonList;