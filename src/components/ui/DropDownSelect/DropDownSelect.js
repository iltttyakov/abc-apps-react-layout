import React from 'react';
import cls from './DropDownSelect.module.scss'
import makeId from "../../../helpers/makeid";
import ToggleElement from "../ToggleElement/ToggleElement";

const list = [
    {
        label: 25,
        value: 25,
    },
    {
        label: 50,
        value: 50,
    },
    {
        label: 75,
        value: 75,
    },
    {
        label: 100,
        value: 100,
    },
]

const DropDownSelect = (
    {}
) => {
    return (
        <div className={cls.box}>

            <div className={cls.preLabel}>
                Показать
            </div>

            <div className={cls.dropdown}>

                <button className={cls.head}>
                    <span className={cls.currentValue}>
                        50
                    </span>
                    <svg className={cls.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.6665 6.66666L7.99984 10L11.3332 6.66666H4.6665Z" fill="#768193"/>
                    </svg>
                </button>

                <ToggleElement className={cls.body}>
                    <ul className={cls.list}>
                        {
                            Object.keys(list).map((key, i) => {
                                const id = makeId(5)

                                return (
                                    <li className={cls.item} key={i}>
                                        <input
                                            className={cls.field}
                                            type={'radio'}
                                            id={id}
                                            value={list[key]['value']}
                                            name={name}
                                            onChange={() => {
                                                onChange(list[key]['value'])
                                            }}
                                            checked={list[key]['checked']}
                                        />
                                        <label
                                            className={cls.label}
                                            htmlFor={id}
                                        >
                                            {list[key]['label']}
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

export default DropDownSelect;