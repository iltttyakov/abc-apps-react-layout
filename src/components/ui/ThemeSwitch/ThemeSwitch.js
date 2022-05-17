import React, {useState} from 'react';
import cls from './ThemeSwitch.module.scss'
import Icons from "../Icons/Icons";
import Toggle from "../Toggle/Toggle";

const ThemeSwitch = () => {
    let [dark, setDark] = useState(false)

    const themeSwitchHandler = () => {
        setDark(!dark)
        console.log('theme switched')
    }

    return (
        <div className={cls.box}>
            <Icons className={[cls.icon, cls.light].join(' ')} size={20} name={'sun'}/>
            <Toggle
                className={cls.toggle}
                onChange={themeSwitchHandler}
                checked={dark}
            />
            <Icons className={[cls.icon, cls.dark].join(' ')} size={20} name={'moon'}/>
        </div>
    );
};

export default ThemeSwitch;