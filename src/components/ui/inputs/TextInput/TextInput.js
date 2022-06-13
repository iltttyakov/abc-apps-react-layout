import React, {useState} from 'react';
import cls from './TextInput.module.scss'
import makeId from "../../../../helpers/makeid";
import Icons from "../../Icons/Icons";


export const TextInputSizes = {
    NORMAL: 'normal',
    BIG: 'big'
}


const TextInput = (
    {
        name,
        register,
        errors = null,
        label = null,
        inputType = 'text',
        placeholder = null,
        iconName = null,
        className = null,
        size = TextInputSizes.NORMAL,
        validation = {},
        disabled = false
    }
) => {
    const id = makeId(5)
    const [onFocus, setOnFocus] = useState(false)

    return (
        <div
            className={[
                cls.box, className,
                onFocus ? cls.focus : null,
                errors[name] ? cls.errors : null,
                disabled ? cls.disabled : null,
                size === TextInputSizes.BIG ? cls.big : null
            ].join(' ')}
        >
            {
                label
                    ? <label className={cls.label} htmlFor={id}>{label}</label>
                    : null
            }
            <div className={cls.fieldContainer}>
                <input
                    {
                        ...register(name, {
                            ...validation
                        })
                    }
                    className={cls.field}
                    type={inputType}
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    onFocus={() => {
                        setOnFocus(true)
                    }}
                    onBlur={() => {
                        setOnFocus(false)
                    }}
                    disabled={disabled}
                />
                {
                    iconName
                        ? <Icons className={cls.icon} name={iconName} size={20}/>
                        : null
                }
            </div>
            <span className={cls.errorText}>
                {errors[name]?.type === 'required' && 'Обязательное поле'}
                {errors[name] && errors[name].type === 'maxLength' && `Максимальная длина ${validation['maxLength']}`}
                {errors[name]?.type === 'custom' && errors[name].message}
            </span>

        </div>
    );
};

export default TextInput;