import React from 'react';
import cls from './TableUI.module.scss'


export default {

    Box: ({children}) => <div className={cls.box}>{children}</div>,

    Table: ({children}) => <table className={cls.table}>{children}</table>,

    Head: ({children}) => <thead className={cls.head}>{children}</thead>,

    Row: ({children}) => <tr className={cls.row}>{children}</tr>,

    Body: ({children}) => <tbody className={cls.body}>{children}</tbody>,

    Cell: ({children, width = null, align = 'left'}) => {
        return (
            <td className={[cls.cell, align === 'left' ? cls.left : cls.right].join(' ')}
                style={width ? {width: `${width}%`} : null}>
                {children}
            </td>
        )
    },

    CellRow: ({children}) =>
        <div className={cls.cellRow}>
            {children}
        </div>,

    HeadCell: ({children, width = null}) =>
        <th className={cls.headCell} style={width ? {width: `${width}%`} : null}>
            {children}
        </th>,

    Footer: ({children}) => <div className={cls.footer}>
        {children}
    </div>,

    ShowCount: ({children}) => <div className={cls.showCount}>
        {children}
    </div>,

    Pagination: ({children}) => <div className={cls.pagination}>
        {children}
    </div>

}