import React, {useState} from 'react';
import cls from './AccountCard.module.scss'
import Icons from "../Icons/Icons";
import ToggleElement from "../ToggleElement/ToggleElement";
import SoftIcon from "../SoftIcon/SoftIcon";
import AppCard from "../AppCard/AppCard";
import storage from "../../../redux/rootActions";
import {ToastContainer, toast} from 'react-toastify';


export const accStatuses = {
    farm: 'farm',
    ready: 'ready',
    ban: 'ban'
}

export const whiteStatuses = {
    approve: 'approve',
    create: 'create',
    ban: 'ban',
}


const AccountCard = (
    {
        icon = null,
        backgroundColor = 'grey',
        date = null,
        card,

        id,
        max_id,
        vpage,

        soft,
        date_ban_formatted,
        status,
        name,
        note = null,
        apps,
        white_status,
        className = null,

        isHiddenPage,
    }
) => {
    let [footerIsOpen, setFooterIsOpen] = useState(false)
    let [isHide, setIsHide] = useState(false)

    const headerCls = [cls.header]
    if (vpage === '2') {
        switch (status) {
            case accStatuses.farm:
                headerCls.push(cls.yellow)
                break
            case accStatuses.ready:
                headerCls.push(cls.green)
                break
            case accStatuses.ban:
                headerCls.push(cls.red)
                break

            default:
                headerCls.push(cls.grey)
                break
        }
    }

    const hideCardHandler = id => {
        storage.board.hide(id)
        setIsHide(true)
        toast.success(isHiddenPage ? 'Карточка восстановлена' : 'Карточка скрыта',
            {
                position: 'top-right',
                autoClose: 3500,
                hideProgressBar: false,
            })
    }

    return (
        <div className={[
            cls.box, className,
            isHide ? cls.hide : null
        ].join(' ')}>
            <div className={headerCls.join(' ')}>

                <div className={cls.accountIconContainer}>
                    <SoftIcon soft={soft} className={cls.accountIcon}/>
                </div>
                <h4 className={cls.title}>
                    {name}
                </h4>

                <div className={cls.headerRight}>
                    {
                        date_ban_formatted
                            ? <div className={cls.date}>
                                {date_ban_formatted}
                            </div>
                            : null
                    }

                    <button
                        type={'button'}
                        className={[cls.noteButton, footerIsOpen ? cls.active : null].join(' ')}
                        onClick={() => setFooterIsOpen(!footerIsOpen)}
                    >
                        <Icons
                            className={cls.noteButtonIcon}
                            name={'document'}
                            size={22}
                        />
                    </button>

                    <button
                        className={cls.hideButton}
                        onClick={() => {
                            hideCardHandler(id)
                        }}
                    >
                        <Icons className={cls.hideIcon} size={24} name={'close'}/>
                    </button>
                </div>

            </div>

            {
                apps.length
                    ? <div className={cls.body}>
                        {
                            apps.map((app, i) => {
                                return Object.keys(app).length
                                    ? <AppCard
                                        key={i}
                                        {...app}
                                        white_status={white_status}
                                        accountStatus={status}
                                    />
                                    : null
                            })
                        }
                    </div>
                    : null
            }

            {
                note
                    ? <ToggleElement isOpen={footerIsOpen}>
                        <div className={cls.footer}>
                            <p>
                                {note}
                            </p>
                        </div>
                    </ToggleElement>
                    : null
            }

        </div>
    );
};

export default AccountCard;