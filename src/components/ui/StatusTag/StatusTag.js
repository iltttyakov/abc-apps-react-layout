import React from 'react';
import cls from './StatusTag.module.scss'


export const StatusTypes = {
    PUBLISH: 'publish',
    MODERATION: 'moderation',
    BAN: 'ban'
}


const StatusTag = ({status}) => {
    const boxCls = [cls.box]
    let label = ''

    switch (status) {
        case StatusTypes.PUBLISH:
            boxCls.push(cls.publish)
            label = 'опубликовано'
            break
        case StatusTypes.MODERATION:
            boxCls.push(cls.moderation)
            label = 'на модерации'
            break
        case StatusTypes.BAN:
            boxCls.push(cls.ban)
            label = 'забанено'
            break
    }

    return (
        <div className={boxCls.join(' ')}>
            {/*{label}*/}
            status
        </div>
    );
};

export default StatusTag;