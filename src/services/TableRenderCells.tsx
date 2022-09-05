import IUser from "../interfaces/IUser";
import {Avatar} from "@mui/material";
import styles from "../assets/table-render.module.scss"
import tableDateStyles from "../assets/table-date.module.scss"
import dayjs from "dayjs";

interface UserInfoProps {
    data: IUser;
    type: 'phone' | 'email'
}

export const UserSimpleInfo = ({data, type}: UserInfoProps) => {
    return (
        <div className="flex">
            <Avatar sizes={"32"} src={data.image} sx={{mr: 1.5}} alt={data.firstName} />
            <div>
                <div className={styles.full__name}>{`${data.firstName} ${data.lastName}`}</div>
                <span className={styles.phone}>{ type === 'phone' ? data.phone : data.email }</span>
            </div>
        </div>
    )
}


interface TableDateProps {
    date: Date | string;
    displayTime?: boolean;
}

export const TableDate = ({ date, displayTime }: TableDateProps) => {
    return (
        <div className={`flex items-center ${tableDateStyles.table_date}`}>
            <span>{dayjs(date).format('MMM DD, YYYY')}</span>
            { displayTime && <span className={tableDateStyles.circle_divider} /> }
            { displayTime && <span>{dayjs(date).format('HH:MM')}</span> }
        </div>
    )
}

interface TransactionStatusProps {
    status: 'pending' | 'successful' | 'failed'
}

export const TableTransactionStatus = ({status}: TransactionStatusProps) => {
    return (
        <div className={`${styles.status} ${styles[status]} flex items-center justify-center`}>{status}</div>
    )
}

export const KYCStatus = ({ verified }: { verified: boolean }) => {
    return (
        <div className={`${styles.kyc_status} flex items-center`}>
            {verified && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
            <span className="ml-1">{ verified ? 'Verified' : 'Not Verified' }</span>
        </div>
    )
}
