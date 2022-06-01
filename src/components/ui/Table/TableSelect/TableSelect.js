import React, {useEffect, useState} from 'react';
import cls from './TableSelect.module.scss'
import ToggleElement from "../../ToggleElement/ToggleElement";
import makeId from "../../../../helpers/makeid";


const TableSelect = (
    {
        options,
        name,
        register,
        getValues,
        multiple = false,
        label = '',
    }
) => {
    const fieldType = multiple ? 'checkbox' : 'radio'

    let [bodyIsOpen, setBodyIsOpen] = useState(false)
    let [labelText, setLabelText] = useState(label)

    const setLabelTextHandler = (newLabelText) => {
        if (multiple) return
        setLabelText(newLabelText)
    }


    return (
        <div className={cls.box}>

            <button
                type={'button'}
                className={cls.head}
                onClick={() => {
                    setBodyIsOpen(!bodyIsOpen)
                }}
            >
                {
                    labelText
                        ? <span>{labelText}</span>
                        : null
                }
                <svg className={[cls.icon, bodyIsOpen ? cls.open : null].join(' ')} width="10" height="10"
                     viewBox="0 0 10 10" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99984 7.08331L0.83317 2.91665L9.1665 2.91665L4.99984 7.08331Z" fill="#0D062D"/>
                </svg>
            </button>

            <ToggleElement isOpen={bodyIsOpen} className={cls.body}>
                <ul className={cls.list}>
                    {
                        options
                            ? options.map((option, i) => {
                                const id = makeId(5)

                                return (
                                    <li className={cls.item} key={i}>
                                        <input
                                            className={cls.field}
                                            type={fieldType}
                                            id={id}
                                            value={option['value']}
                                            name={name}
                                            {...register(name)}
                                            onChange={() => setLabelTextHandler(option['label'])}
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
                            : null
                    }
                </ul>

            </ToggleElement>
        </div>
    );
};

export default TableSelect;