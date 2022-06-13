import React from 'react';
import cls from './Actions.module.scss'

const Actions = ({items, align = 'right'}) => {
    return (
        <div className={[
            cls.actions,
            align === 'right' ? cls.right : cls.center
        ].join(' ')}>
            {
                items.map((item, i) => <div className={cls.action} key={i}>{item}</div>)
            }
        </div>
    )
};

export default Actions;