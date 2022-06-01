import React from 'react';
import cls from './StatusTag.module.scss'


export const StatusTypes = {
    PUBLISH: 'опубликовано',
    MODERATION: 'на модерации',
    BAN: 'забанено'
}


const StatusTag = ({status}) => {
    const boxCls = [cls.box]
    let visible = false

    switch (status) {
        case StatusTypes.PUBLISH:
            boxCls.push(cls.publish)
            visible = true
            break
        case StatusTypes.MODERATION:
            boxCls.push(cls.moderation)
            visible = true
            break
        case StatusTypes.BAN:
            boxCls.push(cls.ban)
            visible = true
            break
    }

    return visible
        ? <div className={boxCls.join(' ')}>{status}</div>
        : null
};

export default StatusTag;