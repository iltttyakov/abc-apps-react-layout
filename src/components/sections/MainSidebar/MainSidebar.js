import React, {useState} from 'react';
import cls from './MainSidebar.module.scss'
import Logo from "../../ui/Logo/Logo";
import VerticalNav from "../../ui/VerticalNav/VerticalNav";
import Icons from "../../ui/Icons/Icons";

const MainSidebar = (
    {
        className = ''
    }
) => {
    let [shrink, setShrink] = useState(false)

    return (
        <nav className={[cls.box, shrink ? cls.shrink : null, 'test'].join(' ')}>

            <div className={[cls.header, cls.section].join(' ')}>
                <div className={cls.logo}>
                    <Logo full={!shrink}/>
                </div>
                <button className={cls.shrinkButton} onClick={() => {
                    setShrink(!shrink)
                }}>
                    <Icons className={cls.shrinkButtonIcon} name={'sidebar-shrink'} size={26}/>
                </button>
            </div>

            <div className={[cls.menu, cls.section].join(' ')}>
                <VerticalNav full={!shrink}/>
            </div>

        </nav>
    );
};

export default MainSidebar;