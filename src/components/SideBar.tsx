import logo from "../logo.svg";
import {Drawer} from "@mui/material";
import React from "react";
import styles from "../assets/side-bar.module.scss"
import INavigation from "../interfaces/INavigation";
import {Link, NavLink} from "react-router-dom";
import OverviewIcon from "../assets/icons/overview.svg"
import CustomerIcon from "../assets/icons/customer.svg"
import DefaulterIcon from "../assets/icons/defaulters.svg"
import WalletIcon from "../assets/icons/wallet.svg"
import * as routes from '../routes'

export function SideBar () {
    const navigations: INavigation[] = [
        {
            name: 'Overview',
            icon: OverviewIcon,
            to: routes.HOME
        },
        {
            name: 'Customers',
            icon: CustomerIcon,
            to: routes.CUSTOMERS
        },
        {
            name: 'Defaulters',
            icon: DefaulterIcon,
            to: routes.DEFAULTERS
        },
        {
            name: 'Fulfillments',
            icon: WalletIcon,
            to: routes.FULFILLMENTS
        }
    ]

    const getActiveClass = (nav: INavigation) => {
        return window.location.pathname.includes(nav.name.toLowerCase()) ? 'link--active' : ''
    }

    return (
        <Drawer variant={'permanent'}>
            <div className={styles.side_bar_wrapper}>
                <img src={logo} width='161' height='43' alt='app-logo' />
                <div className={styles.menu}>
                    <span>QUICK MENU</span>
                    <div className="mt-10">
                        {navigations.map((nav, i) => {
                            return (<NavLink to={nav.to} key={i}>
                                <div className={`flex py-3 items-center mb-4 ${styles.menu_item} ${getActiveClass(nav)}`}>
                                    <div className="icon mr-2">
                                        <img src={nav.icon} alt={nav.name} />
                                    </div>
                                    <div className={styles.menu_text}>{ nav.name }</div>
                                </div>
                            </NavLink>)
                        })}
                    </div>
                </div>
            </div>
        </Drawer>
    )
}
