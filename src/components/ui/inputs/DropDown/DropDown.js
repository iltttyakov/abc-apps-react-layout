import React, {useState} from 'react';
import cls from './DropDown.module.scss'
import makeId from "../../../../helpers/makeid";
import ToggleElement from "../../ToggleElement/ToggleElement";

const DropDown = (
    {
        register,
        options,
        name,
        label = null,
        multiple = false,
        placeholder = null,
    }
) => {
    let [bodyIsOpen, setBodyIsOpen] = useState(false)
    let [currentLabel, setCurrentLabel] = useState('')

    return (
        <div className={cls.container}>

            {
                label
                    ? <p className={cls.boxLabel}>{label}</p>
                    : null
            }

            <div className={[cls.box, bodyIsOpen ? cls.open : null].join(' ')}>

                <button className={cls.head} type={'button'} onClick={() => setBodyIsOpen(!bodyIsOpen)}>
                    <span className={cls.currentValue}>
                        {
                            currentLabel
                                ? currentLabel
                                : placeholder
                                    ? <span className={cls.placeholder}>{placeholder}</span>
                                    : null
                        }
                    </span>
                    <svg className={cls.icon} width="20" height="20" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.5408 8.20711C16.9313 7.81658 16.9313 7.18342 16.5408 6.79289C16.1502 6.40237 15.5171 6.40237 15.1266 6.79289L16.5408 8.20711ZM10.0003 13.3333L9.29322 14.0404C9.68374 14.431 10.3169 14.431 10.7074 14.0404L10.0003 13.3333ZM4.8741 6.79289C4.48357 6.40237 3.85041 6.40237 3.45989 6.79289C3.06936 7.18342 3.06936 7.81658 3.45989 8.20711L4.8741 6.79289ZM15.1266 6.79289L9.29322 12.6262L10.7074 14.0404L16.5408 8.20711L15.1266 6.79289ZM10.7074 12.6262L4.8741 6.79289L3.45989 8.20711L9.29322 14.0404L10.7074 12.6262Z"
                            fill="#BDBDBD"/>
                    </svg>
                </button>

                <ToggleElement isOpen={bodyIsOpen} className={cls.body}>
                    <ul className={cls.list}>
                        {
                            options.map((option, i) => {
                                const id = makeId(5)
                                return (
                                    <li className={cls.item} key={i}>
                                        <input
                                            type={multiple ? 'checkbox' : 'radio'}
                                            id={id}
                                            value={option['value']}
                                            {...register(name)}
                                            name={name}
                                            onChange={() => {
                                                setCurrentLabel(option['label'])
                                            }}
                                            className={cls.field}
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
                </ToggleElement>

            </div>

        </div>
    );
};

export default DropDown;