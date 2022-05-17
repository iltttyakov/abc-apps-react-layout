import React from 'react';
import cls from './TextInput.module.scss'
import makeId from "../../../helpers/makeid";
import Icons from "../Icons/Icons";

const TextInput = (
    {
        name,
        register,
        errors = null,
        required = true,
        label = null,
        inputType = 'text',
        placeholder = null,
        iconName = null,
        className = null
    }
) => {
    const id = makeId(5)

    return (
        <div className={[cls.box, className].join(' ')}>

            {
                label
                    ? <label className={cls.label} htmlFor={id}>{label}</label>
                    : null
            }
            <div className={cls.fieldContainer}>
                <input
                    {...register(name, {required})}
                    className={[cls.field, errors ? cls.error : null].join(' ')}
                    type={inputType}
                    id={id}
                    placeholder={placeholder}
                    name={name}
                />
                {
                    iconName
                        ? <Icons className={cls.icon} name={iconName} size={20}/>
                        : null
                }
            </div>
            {
                errors
                    ? <span className={cls.errorText}>
                        Описание ошибки
                    </span>
                    : null
            }

        </div>
    );
};

export default TextInput;