import React from 'react';
import cls from './Form.module.scss'

export default {
    Box: ({children, onSubmit}) => <form onSubmit={onSubmit} className={cls.box}>{children}</form>,

    Fieldset: ({children}) => <fieldset className={cls.fieldset}>{children}</fieldset>,

    Column: ({children, width = null}) => {
        return (
            <div className={cls.column} style={width ? {width: width} : null}>
                {children}
            </div>
        )
    },

    Row: ({children}) => <div className={cls.row}>{children}</div>,
    Section: ({children}) => <div className={cls.section}>{children}</div>,

    Item: ({children, style = {}}) => {
        const itemCls = [cls.item]

        return (
            <div
                className={itemCls.join(' ')}
                style={style}
            >
                {children}
            </div>
        )
    },

}