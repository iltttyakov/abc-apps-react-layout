import React from 'react';
import cls from './UserIcon.module.scss'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import paths from "../../paths";
import Button from "../../ui/Button/Button";
import actions from "../../../redux/rootActions";

const UserIcon = () => {
    const login = useSelector(state => state.auth.login)

    return login
        ? <div className={cls.box}>
            <div className={cls.initials}>
                {login.substring(0, 2)}
                <NavLink to={paths.ProfilePage} className={cls.profileLink}/>
            </div>
            <div className={cls.dropdown}>
                <div className={cls.dropdownInner}>
                    <p className={cls.login}>{login}</p>
                    <Button
                        className={cls.logout}
                        shadow={false}
                        onClick={actions.auth.logout}
                    >
                        Выйти
                    </Button>
                </div>
            </div>
        </div>
        : null
};

export default UserIcon;