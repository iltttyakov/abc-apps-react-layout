import React from 'react';
import cls from './StatusTag.module.scss'


export const StatusTypes = {
    PUBLISH: 'опубликовано',
    MODERATION: 'на модерации',
    BAN: 'забанено',
    READY: 'ready',
    FARM: 'farm',
    BAN2: 'ban',
}


const StatusTag = ({status, children}) => {
    const boxCls = [cls.box]
    let visible = false

    switch (status) {
        case StatusTypes.PUBLISH:
            boxCls.push(cls.publish)
            visible = true
            break
        case StatusTypes.READY:
            boxCls.push(cls.publish)
            visible = true
            break
        case StatusTypes.MODERATION:
            boxCls.push(cls.moderation)
            visible = true
            break
        case StatusTypes.FARM:
            boxCls.push(cls.moderation)
            visible = true
            break
        case StatusTypes.BAN:
            boxCls.push(cls.ban)
            visible = true
        case StatusTypes.BAN2:
            boxCls.push(cls.ban)
            visible = true
            break
    }

    return visible
        ? <div className={boxCls.join(' ')}>{children}</div>
        : null
};

export default StatusTag;