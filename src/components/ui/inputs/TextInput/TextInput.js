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
        required = true,
        label = null,
        inputType = 'text',
        placeholder = null,
        iconName = null,
        className = null,
        size = TextInputSizes.NORMAL
    }
) => {
    const id = makeId(5)
    const [onFocus, setOnFocus] = useState(false)

    return (
        <div
            className={[
                cls.box, className,
                onFocus ? cls.focus : null,
                errors ? cls.errors : null,
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
                    {...register(name, {required})}
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