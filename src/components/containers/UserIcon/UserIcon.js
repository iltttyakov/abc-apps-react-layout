import React, {useEffect, useRef, useState} from 'react';
import cls from './UserIcon.module.scss'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import paths from "../../paths";
import actions from "../../../redux/rootActions";
import ToggleElement from "../../ui/ToggleElement/ToggleElement";


const UserIcon = () => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const login = useSelector(state => state.auth.login)
    const ref = useRef()


    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setDropdownIsOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref])


    return login
        ? <div className={cls.box} ref={ref}>
            <button className={cls.initials} onClick={() => {
                setDropdownIsOpen(!dropdownIsOpen)
            }}>
                {login.substring(0, 2)}
            </button>
            <ToggleElement
                className={cls.dropdown}
                isOpen={dropdownIsOpen}
            >
                <div className={cls.dropdownInner}>
                    <NavLink
                        className={[cls.login, cls.link].join(' ')}
                        to={paths.ProfilePage}
                    >
                        {login}
                    </NavLink>
                    <button
                        className={[cls.logout, cls.link].join(' ')}
                        onClick={actions.auth.logout}
                    >
                        Выйти
                    </button>
                </div>
            </ToggleElement>
        </div>
        : null
};

export default UserIcon;