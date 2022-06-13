import React from 'react';
import cls from './AccountCardList.module.scss'
import AccountCard from "../AccountCard/AccountCard";


const AccountCardList = ({items, isHiddenPage}) => {

    return (
        <ul className={cls.list}>
            {
                items.length
                    ? items.map((item, i) =>
                        <li className={cls.item} key={i}>
                            <AccountCard
                                {...item.acc}
                                apps={item.apps}
                                white_status={item['white_status']}
                                isHiddenPage={isHiddenPage}
                            />
                        </li>
                    )
                    : 'Аккаунты не найдены'
            }
        </ul>
    );
};

export default AccountCardList;