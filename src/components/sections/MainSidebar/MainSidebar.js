import React from 'react';
import cls from './MainSidebar.module.scss'
import Logo from "../../ui/Logo/Logo";
import VerticalNav from "../VerticalNav/VerticalNav";
import Icons from "../../ui/Icons/Icons";
import {useSelector} from "react-redux";
import actions from "../../../redux/rootActions";


const MainSidebar = () => {
    const shrink = useSelector(state => state.auth.sidebarShrink)


    return (
        <nav className={[cls.box, shrink ? 'shrink' : null].join(' ')}>

            <div className={[cls.header, cls.section].join(' ')}>
                <div className={cls.logo}>
                    <Logo/>
                </div>
                <button
                    className={cls.shrinkButton}
                    onClick={actions.auth.shrinkSidebar}
                >
                    <Icons className={cls.shrinkButtonIcon} name={'sidebar-shrink'} size={26}/>
                </button>
            </div>

            <div className={[cls.menu, cls.section].join(' ')}>
                <VerticalNav/>
            </div>

        </nav>
    );
};

export default MainSidebar;