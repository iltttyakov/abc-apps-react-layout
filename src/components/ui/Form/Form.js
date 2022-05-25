import React from 'react';
import cls from './Form.module.scss'
import Fieldset from "./Fieldset/Fieldset";


export const FieldWidth = {
    w250: 'w250',
    w515: 'w515',
    FULL: 'full'
}


export default {
    Box: ({children, onSubmit}) => <form onSubmit={onSubmit} className={cls.box}>{children}</form>,

    Row: ({children}) => <div className={cls.row}>{children}</div>,

    Column: ({children}) => <div className={cls.column}>{children}</div>,

    Fieldset: ({children, style = {}, title = null}) =>
        <Fieldset className={cls.fieldset} style={style} title={title}>
            {children}
        </Fieldset>,

    FieldList: ({children, style = {}}) => <div className={cls.fieldList} style={style}>{children}</div>,

    Field: ({children, width = FieldWidth.w250, style = {}}) => {
        const fieldCls = [cls.field]

        switch (width) {
            case FieldWidth.w250:
                fieldCls.push(cls.w250)
                break
            case FieldWidth.w515:
                fieldCls.push(cls.w515)
                break
            case FieldWidth.FULL:
                fieldCls.push(cls.full)
                break
        }

        return (
            <div className={fieldCls.join(' ')} style={style}>
                {children}
            </div>
        )
    },

    Actions: ({items, align = 'center'}) => {
        return (
            <div className={[cls.actions, align === 'center' ? cls.center : cls.right].join(' ')}>
                {
                    items.map((item, i) => <div className={cls.action} key={i}>{item}</div>)
                }
            </div>
        )
    }

}