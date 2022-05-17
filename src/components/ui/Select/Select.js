import React, {useEffect, useRef, useState} from 'react';
import cls from './Select.module.scss'
import ToggleElement from "../ToggleElement/ToggleElement";
import makeId from "../../../helpers/makeid";


const Select = (
    {
        items,
        label,
        multiple = false,
        onChange = null,
    }
) => {
    const fieldType = multiple ? 'checkbox' : 'radio'

    let [bodyIsOpen, setBodyIsOpen] = useState(false)

    return (
        <div className={cls.box}>

            <button className={cls.head} onClick={() => {
                setBodyIsOpen(!bodyIsOpen)
            }}>
                <span className={cls.curent}>
                    {label}
                </span>
                <svg className={[cls.icon, bodyIsOpen ? cls.open : null].join(' ')} width="10" height="10"
                     viewBox="0 0 10 10" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99984 7.08331L0.83317 2.91665L9.1665 2.91665L4.99984 7.08331Z" fill="#0D062D"/>
                </svg>
            </button>

            <ToggleElement isOpen={bodyIsOpen} className={cls.body}>
                <ul className={cls.list}>
                    {
                        Object.keys(items).map((key, i) => {
                            const id = makeId(5)

                            return (
                                <li className={cls.item} key={i}>
                                    <input
                                        className={cls.field}
                                        type={fieldType}
                                        id={id}
                                        value={items[key]['value']}
                                        name={name}
                                        onChange={() => {
                                            onChange(items[key]['value'])
                                        }}
                                        checked={items[key]['checked']}
                                    />
                                    <label
                                        className={cls.label}
                                        htmlFor={id}
                                    >
                                        {items[key]['label']}
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>

            </ToggleElement>

        </div>
    );
};

export default Select;