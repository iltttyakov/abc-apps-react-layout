import React from 'react';
import cls from "./TabLinks.module.scss";
import {NavLink} from "react-router-dom";
import Role from "../../containers/Role/Role";


const TabLinks = (
    {
        options,
        className = null,
    }
) => {
    return (
        <div className={[cls.box, className].join(' ')}>
            <ul className={cls.list}>

                {
                    options.map((option, i) => {
                        return (

                                <li className={cls.item} key={i}>
                                    <NavLink
                                        className={cls.label}
                                        to={option['to']}
                                        activeClassName={cls.active}
                                    >
                                        {option['label']}
                                    </NavLink>
                                </li>

                        )
                    })
                }

            </ul>
        </div>
    );
};

export default TabLinks;

// <Role accessTo={option['right'] ?? 'all'}>
// </Role>