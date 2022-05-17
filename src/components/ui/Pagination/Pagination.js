import React from 'react';
import cls from './Pagination.module.scss'
import Icons from "../Icons/Icons";

const Pagination = () => {
    return (
        <div className={cls.box}>

            <button className={[cls.control, cls.prev, cls.disable].join(' ')}>
                <svg className={cls.controlIcon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={cls.arrow}
                        d="M14.2068 9.45956C13.8163 9.06904 13.1831 9.06904 12.7926 9.45956C12.402 9.85009 12.402 10.4833 12.7926 10.8738L14.2068 9.45956ZM19.333 16L20.0401 16.7071C20.2277 16.5196 20.333 16.2652 20.333 16C20.333 15.7348 20.2277 15.4804 20.0401 15.2929L19.333 16ZM12.7926 21.1262C12.402 21.5168 12.402 22.1499 12.7926 22.5404C13.1831 22.931 13.8163 22.931 14.2068 22.5404L12.7926 21.1262ZM12.7926 10.8738L18.6259 16.7071L20.0401 15.2929L14.2068 9.45956L12.7926 10.8738ZM18.6259 15.2929L12.7926 21.1262L14.2068 22.5404L20.0401 16.7071L18.6259 15.2929Z"/>
                    <path
                        className={cls.border}
                        d="M0.5 4.20231V27.793L4.20312 31.5H27.8412L31.5 27.794V4.21472L27.793 0.5H4.19922L0.5 4.20231Z"/>
                </svg>
            </button>

            <div className={cls.current}>
                1
            </div>

            <span className={cls.separator}>/</span>

            <span className={cls.total}>
                195
            </span>

            <button className={[cls.control, cls.next].join(' ')}>
                <svg className={cls.controlIcon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={cls.arrow}
                        d="M14.2068 9.45956C13.8163 9.06904 13.1831 9.06904 12.7926 9.45956C12.402 9.85009 12.402 10.4833 12.7926 10.8738L14.2068 9.45956ZM19.333 16L20.0401 16.7071C20.2277 16.5196 20.333 16.2652 20.333 16C20.333 15.7348 20.2277 15.4804 20.0401 15.2929L19.333 16ZM12.7926 21.1262C12.402 21.5168 12.402 22.1499 12.7926 22.5404C13.1831 22.931 13.8163 22.931 14.2068 22.5404L12.7926 21.1262ZM12.7926 10.8738L18.6259 16.7071L20.0401 15.2929L14.2068 9.45956L12.7926 10.8738ZM18.6259 15.2929L12.7926 21.1262L14.2068 22.5404L20.0401 16.7071L18.6259 15.2929Z"/>
                    <path
                        className={cls.border}
                        d="M0.5 4.20231V27.793L4.20312 31.5H27.8412L31.5 27.794V4.21472L27.793 0.5H4.19922L0.5 4.20231Z"/>
                </svg>
            </button>

        </div>
    )
        ;
};

export default Pagination;