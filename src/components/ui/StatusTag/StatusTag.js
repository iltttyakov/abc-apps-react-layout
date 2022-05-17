import React from 'react';
import cls from './StatusTag.module.scss'

const StatusTag = (
    {
        status
    }
) => {
    const boxCls = [cls.box]
    let label = ''

    switch (status) {
        case 'publish':
            boxCls.push(cls.publish)
            label = 'опубликовано'
            break
        case 'moderation':
            boxCls.push(cls.moderation)
            label = 'на модерации'
            break
        case 'ban':
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