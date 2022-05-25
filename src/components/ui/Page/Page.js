import React from 'react'
import cls from './Page.module.scss'

export default {

    Box: ({children}) => <div className={cls.box}>{children}</div>,

    Header: ({children, padding = true}) => <div className={[cls.header, padding ? null : cls.noPadding].join(' ')}>{children}</div>,

    Title: ({children}) => <h1 className={cls.title}>{children}</h1>,

    Actions: ({children}) => <div className={cls.actions}>{children}</div>,

    Content: ({children, padding = 'default'}) => {
        const boxCls = [cls.content]
        switch (padding) {
            case 'default':
                boxCls.push(cls.paddingDefault)
                break
            case 'fluid':
                boxCls.push(cls.paddingFluid)
                break
            case 'none':
                boxCls.push(cls.paddingNone)
                break
        }

        return (
            <div className={boxCls.join(' ')}>
                {children}
            </div>
        )
    },

    Top: ({children, margin = 50}) => <div className={cls.top} style={{marginBottom: margin}}>{children}</div>


}