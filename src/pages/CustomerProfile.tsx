import {NavLink} from "react-router-dom";
import {useState} from "react";
import styles from "../assets/customer-profile.module.scss"

function FieldItem ({field}: any) {
    console.log(field.label)
    return (
        <div className={styles.field + ' mt-4'}>
            <label>{field.label}</label>
            <span>{field.value}</span>
        </div>
    )
}

const pending = [1, 2, 3, 4]

export default function CustomerProfile () {
    const [back, setBack] = useState("/")
    const fields: any[] = [
        {
            name: 'full name',
            isTwin: true,
            children: [
                {
                    label: 'First Name',
                    name: 'first name',
                    value: 'James'
                },
                {
                    label: 'Last Name',
                    name: 'last name',
                    value: 'Warri'
                }
            ],
        },
        {
            label: 'Phone Number',
            value: '8041 5063 789'
        },
        {
            name: 'date_state',
            isTwin: true,
            children: [
                {
                    label: 'Date of Birth',
                    name: 'first name',
                    value: '02 Feb 1990'
                },
                {
                    label: 'State of Residence',
                    name: 'last name',
                    value: 'Lagos'
                }
            ],
        },
        {
            name: 'bank_details',
            isTwin: true,
            children: [
                {
                    label: 'Bank Name',
                    name: 'first name',
                    value: 'Access Bank PLC'
                },
                {
                    label: 'Bank Number',
                    name: 'last name',
                    value: '102848393'
                }
            ],
        },
        {
            label: 'Address',
            value: '34 Sunville Estate, Macathony Street,  Ikeja'
        }
    ]
    const transHistory = {
        loan: '404,051',
        paid: '120,000'
    }
    return (
        <div>
            <div className="flex">
                <NavLink to={back}>Go back</NavLink>
                <span className="mx-2">/</span>
                <span>Oliver Tai</span>
            </div>
            <div className={styles.wrapper + ' flex'}>
                <div>
                    <h3 className={styles.page_title}>Customer's Profile</h3>
                    <div className="flex mt-6">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="56" height="56" rx="28" fill="#F9F5FF"/>
                            <path d="M28.1021 27.7273C28.1021 29.2803 27.818 30.6155 27.2498 31.733C26.6816 32.8456 25.9028 33.7027 24.9132 34.304C23.9283 34.9006 22.8085 35.1989 21.5538 35.1989C20.2943 35.1989 19.1698 34.9006 18.1802 34.304C17.1954 33.7027 16.4189 32.8433 15.8507 31.7259C15.2825 30.6084 14.9984 29.2756 14.9984 27.7273C14.9984 26.1742 15.2825 24.8414 15.8507 23.7287C16.4189 22.6113 17.1954 21.7543 18.1802 21.1577C19.1698 20.5563 20.2943 20.2557 21.5538 20.2557C22.8085 20.2557 23.9283 20.5563 24.9132 21.1577C25.9028 21.7543 26.6816 22.6113 27.2498 23.7287C27.818 24.8414 28.1021 26.1742 28.1021 27.7273ZM25.9288 27.7273C25.9288 26.5436 25.737 25.5469 25.3535 24.7372C24.9747 23.9228 24.4539 23.3073 23.791 22.8906C23.1329 22.4692 22.3871 22.2585 21.5538 22.2585C20.7157 22.2585 19.9676 22.4692 19.3095 22.8906C18.6513 23.3073 18.1305 23.9228 17.747 24.7372C17.3682 25.5469 17.1788 26.5436 17.1788 27.7273C17.1788 28.911 17.3682 29.91 17.747 30.7244C18.1305 31.5341 18.6513 32.1496 19.3095 32.571C19.9676 32.9877 20.7157 33.196 21.5538 33.196C22.3871 33.196 23.1329 32.9877 23.791 32.571C24.4539 32.1496 24.9747 31.5341 25.3535 30.7244C25.737 29.91 25.9288 28.911 25.9288 27.7273ZM30.8382 35V20.4545H36.0229C37.1498 20.4545 38.0849 20.6487 38.8283 21.0369C39.5764 21.4252 40.1351 21.9626 40.5044 22.6491C40.8738 23.331 41.0584 24.1193 41.0584 25.0142C41.0584 25.9044 40.8714 26.688 40.4973 27.3651C40.128 28.0374 39.5693 28.5606 38.8212 28.9347C38.0778 29.3087 37.1427 29.4957 36.0158 29.4957H32.0882V27.6065H35.8169C36.5272 27.6065 37.1048 27.5047 37.5499 27.3011C37.9997 27.0975 38.3288 26.8016 38.5371 26.4134C38.7454 26.0251 38.8496 25.5587 38.8496 25.0142C38.8496 24.465 38.7431 23.9891 38.53 23.5866C38.3217 23.1842 37.9926 22.8764 37.5428 22.6634C37.0977 22.4455 36.513 22.3366 35.7885 22.3366H33.0328V35H30.8382ZM38.0186 28.4375L41.6124 35H39.1124L35.5897 28.4375H38.0186Z" fill="#7F56D9"/>
                        </svg>
                        <div className="profile-name flex flex-col ml-2">
                            <span>Oliver Tan</span>
                            <small>Customer</small>
                        </div>
                    </div>
                    <div className="mt-6" style={{ width: 430 }}>
                        {fields.map((field, i) => {
                            if (field.isTwin) {
                                return (
                                    <div className={`${styles.gridDisplay}`} key={i}>
                                        {field.children.map((child: any, j: number) => <FieldItem field={child} key={j} />)}
                                    </div>
                                )
                            }
                            return <FieldItem field={field} key={i} />
                        })}
                    </div>
                </div>
                <div className="p-6">
                    <div className="mt-6">
                        <span>Transaction History</span>
                        <div className={styles.transaction}>
                            <div>
                                <div>Amount Loaned (NGN)</div>
                                <div>{ transHistory.loan }</div>
                            </div>
                            <div>
                                <div>Amount Paid (NGN)</div>
                                <div>{ transHistory.paid }</div>
                            </div>
                        </div>
                        <div className={`mt-6 ${styles.pending_payment}`}>
                            <span>Pending payment</span>
                            {pending.map((_pending, i) => (
                                <div className="flex justify-between w-full mt-6 mb-6">
                                    <div className="flex">
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.475 30.625H24.475V29.45C25.1917 29.3833 25.8793 29.121 26.538 28.663C27.196 28.2043 27.525 27.5 27.525 26.55C27.525 25.85 27.3123 25.254 26.887 24.762C26.4623 24.2707 25.65 23.8083 24.45 23.375C23.3333 22.9917 22.625 22.6623 22.325 22.387C22.025 22.1123 21.875 21.7167 21.875 21.2C21.875 20.6833 22.071 20.2583 22.463 19.925C22.8543 19.5917 23.3833 19.425 24.05 19.425C24.55 19.425 24.9707 19.5417 25.312 19.775C25.654 20.0083 25.9333 20.3 26.15 20.65L27 20.3C26.7667 19.8167 26.425 19.4167 25.975 19.1C25.525 18.7833 25.0417 18.6 24.525 18.55V17.375H23.525V18.55C22.6583 18.7 22 19.029 21.55 19.537C21.1 20.0457 20.875 20.6 20.875 21.2C20.875 21.9167 21.104 22.4917 21.562 22.925C22.0207 23.3583 22.7833 23.7667 23.85 24.15C24.9333 24.55 25.6583 24.9083 26.025 25.225C26.3917 25.5417 26.575 25.9833 26.575 26.55C26.575 27.25 26.3167 27.754 25.8 28.062C25.2833 28.3707 24.7333 28.525 24.15 28.525C23.5667 28.525 23.046 28.3583 22.588 28.025C22.1293 27.6917 21.7583 27.2167 21.475 26.6L20.6 26.975C20.8833 27.6583 21.2667 28.1917 21.75 28.575C22.2333 28.9583 22.8083 29.2333 23.475 29.4V30.625ZM24 33C22.75 33 21.5793 32.7627 20.488 32.288C19.396 31.8127 18.446 31.1707 17.638 30.362C16.8293 29.554 16.1873 28.604 15.712 27.512C15.2373 26.4207 15 25.25 15 24C15 22.75 15.2373 21.579 15.712 20.487C16.1873 19.3957 16.8293 18.4457 17.638 17.637C18.446 16.829 19.396 16.1873 20.488 15.712C21.5793 15.2373 22.75 15 24 15C25.25 15 26.421 15.2373 27.513 15.712C28.6043 16.1873 29.5543 16.829 30.363 17.637C31.171 18.4457 31.8127 19.3957 32.288 20.487C32.7627 21.579 33 22.75 33 24C33 25.25 32.7627 26.4207 32.288 27.512C31.8127 28.604 31.171 29.554 30.363 30.362C29.5543 31.1707 28.6043 31.8127 27.513 32.288C26.421 32.7627 25.25 33 24 33ZM24 32C26.2167 32 28.1043 31.221 29.663 29.663C31.221 28.1043 32 26.2167 32 24C32 21.7833 31.221 19.8957 29.663 18.337C28.1043 16.779 26.2167 16 24 16C21.7833 16 19.896 16.779 18.338 18.337C16.7793 19.8957 16 21.7833 16 24C16 26.2167 16.7793 28.1043 18.338 29.663C19.896 31.221 21.7833 32 24 32Z" fill="black"/>
                                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black"/>
                                        </svg>
                                        <div className="flex flex-col ml-2">
                                            <div>
                                                <span>1/4 payment</span>
                                                <span className={styles.overdue}>Overdue</span>
                                            </div>
                                            <small>21 Jul, 2022</small>
                                        </div>
                                    </div>
                                    <span className="amount">NGN 34,600</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
