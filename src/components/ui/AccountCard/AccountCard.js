import React, {useState} from 'react';
import cls from './AccountCard.module.scss'
import IconButton from "../IconButton/IconButton";
import Icons from "../Icons/Icons";
import ToggleElement from "../ToggleElement/ToggleElement";


const AccountCard = (
    {
        name,
        icon = null,
        note = '',
        appList = null,
        backgroundColor = 'grey',
        date = null
    }
) => {
    let [footerIsOpen, setFooterIsOpen] = useState(false)


    const headerCls = [cls.header]
    switch (backgroundColor) {
        case 'green':
            headerCls.push(cls.green)
            break
        case 'yellow':
            headerCls.push(cls.yellow)
            break
        default:
            headerCls.push(cls.grey)
            break
    }


    return (
        <div className={cls.box}>

            <div className={headerCls.join(' ')}>

                <div className={cls.accountIconContainer}>
                    <img
                        className={cls.accountIcon} src={icon}
                        width={30} height={30} alt={'Иконка аккаунта'}
                    />
                </div>

                <h4 className={cls.title}>
                    {name}
                </h4>

                <div className={cls.headerRight}>
                    {
                        date
                            ? <div className={cls.date}>
                                {date}
                            </div>
                            : null
                    }

                    <button
                        className={[cls.noteButton, footerIsOpen ? cls.active : null].join(' ')}
                        onClick={() => setFooterIsOpen(!footerIsOpen)}
                    >
                        <Icons
                            className={cls.noteButtonIcon}
                            name={'document'}
                            size={22}
                        />
                    </button>

                    <button className={cls.hideButton}>
                        <Icons className={cls.hideIcon} size={24} name={'close'}/>
                    </button>
                </div>

            </div>

            {
                appList
                    ? <div className={cls.body}>
                        {appList}
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