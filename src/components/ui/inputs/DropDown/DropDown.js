import React, {useEffect, useRef, useState} from 'react';
import cls from './DropDown.module.scss'
import makeId from "../../../../helpers/makeid";
import ToggleElement from "../../ToggleElement/ToggleElement";

const list = [10, 25, 50, 100]

const DropDown = (
    {
        register,
        getValues,
        name,
        onChange = () => {
        },
        position = 'bottom'
    }
) => {
    const [isOpen, setIsOpen] = useState(false)
    const [label, setLabel] = useState(getValues(name))
    const ref = useRef()

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref])


    const clickHandler = e => {
        setLabel(e.target.value)
        onChange(e)
    }

    return (
        <div className={[cls.box, position === 'top' ? cls.top : null].join(' ')} ref={ref}>

            <div className={cls.preLabel}>Показать</div>

            <div className={cls.dropdown}>

                <button className={cls.head} onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                    <span className={cls.currentValue}>
                        {label}
                    </span>
                    <svg className={cls.icon} width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.6665 6.66666L7.99984 10L11.3332 6.66666H4.6665Z" fill="#768193"/>
                    </svg>
                </button>

                <ToggleElement className={cls.body} isOpen={isOpen}>
                    <ul className={cls.list}>
                        {
                            list.map((item, i) => {
                                const id = makeId(5)
                                return (
                                    <li className={cls.item} key={i}>
                                        <input
                                            className={cls.field}
                                            type={'radio'} id={id}
                                            value={item} name={name}
                                            {...register(name, {
                                                onChange: e => {
                                                    clickHandler(e)
                                                }
                                            })}
                                        />
                                        <label
                                            className={cls.label}
                                            htmlFor={id}
                                        >
                                            {item}
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </ToggleElement>

            </div>

            <div className={cls.postLabel}>
                записей
            </div>

        </div>
    );
};

export default DropDown;