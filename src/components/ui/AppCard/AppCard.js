import React from 'react';
import cls from './AppCard.module.scss'
import {NavLink} from "react-router-dom";
import Icons from "../Icons/Icons";
import AppIcon from "../AppIcon/AppIcon";
import {accStatuses, whiteStatuses} from "../AccountCard/AccountCard";
import MoreButton from "../MoreButton/MoreButton";
import {urls} from "../../paths";

const appTypes = {
    white: 'white',
    grey: 'grey'
}


const AppCard = (
    {
        link = '#',
        name,
        type,
        icon,
        gdate,
        mode,
        link_store,
        id,

        white_status,
        accountStatus,
    }
) => {
    const boxCls = [cls.box]


    if (accountStatus === accStatuses.ban) {
        boxCls.push(cls.red)
    } else {
        switch (white_status) {
            case whiteStatuses.approve:
                boxCls.push(cls.green)
                break
            case whiteStatuses.create:
                boxCls.push(cls.yellow)
                break
            case whiteStatuses.ban:
                boxCls.push(cls.red)
                break
            default:
                boxCls.push(cls.grey)
                break
        }
    }


    return (
        <div className={boxCls.join(' ')}>

            {
                type !== appTypes.white
                    ? <AppIcon name={icon} mode={mode}/>
                    : null
            }

            <h5 className={cls.name}>
                <a className={cls.nameLink} href={link_store} target={'_blank'}>
                    {name}
                </a>
            </h5>

            {
                gdate
                    ? <div className={cls.date}>{gdate}</div>
                    : null
            }

            <MoreButton url={urls.AppSinglePage(id)} color={'light'}/>

        </div>
    );
};

export default AppCard;