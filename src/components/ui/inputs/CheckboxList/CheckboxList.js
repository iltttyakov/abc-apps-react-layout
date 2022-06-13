import React from 'react';
import cls from './CheckboxList.module.scss'
import Checkbox from "../Checkbox/Checkbox";


export const CheckboxListDirection = {
    ROW: 'row', COLUMN: 'column'
}

export const CheckboxListLabelSize = {
    BIG: 'big', SMALL: 'small'
}


const CheckboxList = (
    {
        name,
        register,
        options,
        direction = CheckboxListDirection.ROW,
        label = null,
        labelSize = CheckboxListLabelSize.BIG
    }
) => {
    const listCls = [cls.list]
    if (direction === CheckboxListDirection.COLUMN) listCls.push(cls.column)

    return (
        <div className={cls.box}>
            {
                label
                    ? <p
                        className={[
                            cls.label,
                            labelSize === CheckboxListLabelSize.SMALL ? cls.small : null
                        ].join('')}
                    >
                        {label}
                    </p>
                    : null
            }
            <ul className={listCls.join(' ')}>
                {
                    options.map((option, i) => {
                        return (<li className={cls.item} key={i}>
                            <Checkbox
                                name={option['name'] ? option['name'] : name}
                                register={register}
                                label={option['label']}
                                value={option['value']}
                                disable={option['disable'] ?? false}
                            />
                        </li>)
                    })
                }
            </ul>
        </div>
    );
};

export default CheckboxList;