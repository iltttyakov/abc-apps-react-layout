import React from 'react';
import cls from './AppCard.module.scss'
import {NavLink} from "react-router-dom";
import Icons from "../Icons/Icons";


const AppCard = (
    {
        appName,
        icon = null,
        date = null,
        type = 'white',
        backgroundColor = 'green',
        link = '#'
    }
) => {
    const boxCls = [cls.box]
    switch (backgroundColor) {
        case 'green':
            boxCls.push(cls.green)
            break
        case 'yellow':
            boxCls.push(cls.yellow)
            break
        case 'red':
            boxCls.push(cls.red)
            break
        default:
            boxCls.push(cls.grey)
            break
    }

    return (
        <div className={boxCls.join(' ')}>

            {
                type === 'grey'
                    ?
                    <div className={[cls.iconContainer, type === 'grey' ? cls.mode : null].join(' ')}>
                        <img
                            className={cls.icon}
                            src={icon}
                            width={26}
                            height={26}
                            alt={'Иконка приложения'}
                        />
                    </div>
                    : null
            }

            <p className={cls.name}>
                {appName}
            </p>

            {
                date
                    ? <div className={cls.date}>{date}</div>
                    : null
            }

            <NavLink className={cls.moreLink} to={link}>
                <Icons className={cls.moreIcon} name={'more'} size={20}/>
            </NavLink>

        </div>
    );
};

export default AppCard;