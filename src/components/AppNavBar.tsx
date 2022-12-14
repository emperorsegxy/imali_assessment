import {AppBar, Avatar, Toolbar} from "@mui/material";
import React from "react";
import styles from "../assets/app-bar.module.scss"
import avatar from '../assets/icons/avatar.svg'

interface Props {
    username: string;
    vendorId: string;
}

export default function AppNavBar (props?: Props) {
    const username = props?.username ?? '--'
    return (
        <AppBar position='static'>
            <Toolbar>
                <div className="flex w-full h-full items-center justify-between px-12 py-4">
                    <div className={styles.greetings}>
                        <div>Hello, {username}</div>
                        <span>Here’s what’s going on with your account.</span>
                    </div>
                    <div className="flex h-full items-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_9_8616)">
                                <path d="M16.0002 29.333C17.4668 29.333 18.6668 28.133 18.6668 26.6663H13.3335C13.3335 28.133 14.5335 29.333 16.0002 29.333ZM24.0002 21.333V14.6663C24.0002 10.573 21.8268 7.14634 18.0002 6.23967V5.33301C18.0002 4.22634 17.1068 3.33301 16.0002 3.33301C14.8935 3.33301 14.0002 4.22634 14.0002 5.33301V6.23967C10.1868 7.14634 8.00016 10.5597 8.00016 14.6663V21.333L5.3335 23.9997V25.333H26.6668V23.9997L24.0002 21.333ZM21.3335 22.6663H10.6668V14.6663C10.6668 11.3597 12.6802 8.66634 16.0002 8.66634C19.3202 8.66634 21.3335 11.3597 21.3335 14.6663V22.6663Z" fill="#014342"/>
                                <circle cx="24" cy="7" r="7" fill="#FF4242"/>
                                <path d="M22.5597 10V9.36364L24.5284 7.32386C24.7386 7.10227 24.9119 6.90814 25.0483 6.74148C25.1866 6.57292 25.2898 6.41288 25.358 6.26136C25.4261 6.10985 25.4602 5.94886 25.4602 5.77841C25.4602 5.58523 25.4148 5.41856 25.3239 5.27841C25.233 5.13636 25.1089 5.02746 24.9517 4.9517C24.7945 4.87405 24.6174 4.83523 24.4205 4.83523C24.2121 4.83523 24.0303 4.87784 23.875 4.96307C23.7197 5.0483 23.6004 5.16856 23.517 5.32386C23.4337 5.47917 23.392 5.66098 23.392 5.86932H22.554C22.554 5.51515 22.6354 5.20549 22.7983 4.94034C22.9612 4.67519 23.1847 4.4697 23.4688 4.32386C23.7528 4.17614 24.0758 4.10227 24.4375 4.10227C24.803 4.10227 25.125 4.17519 25.4034 4.32102C25.6837 4.46496 25.9025 4.66193 26.0597 4.91193C26.2169 5.16004 26.2955 5.44034 26.2955 5.75284C26.2955 5.96875 26.2547 6.17992 26.1733 6.38636C26.0938 6.5928 25.9545 6.82292 25.7557 7.0767C25.5568 7.3286 25.2803 7.63447 24.9261 7.99432L23.7699 9.20455V9.24716H26.3892V10H22.5597Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_9_8616">
                                    <rect width="32" height="32" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="divider mx-6" />
                        <div className={`flex items-center ${styles.dropdown_corner}`}>
                            <Avatar src={avatar} alt={username} />
                            <div className="ml-2">
                                <div className="flex items-center">
                                    <span className={styles.dropdown_name}>{username}</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.6666 9.33317L12 15.9998L5.33331 9.33317" stroke="#222222" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <span className={styles.vendor_id}>Vendor ID: {props?.vendorId}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}
