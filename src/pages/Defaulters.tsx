import WalletIcon from "../assets/icons/_wallet.svg";
import RepayIcon from "../assets/icons/repay-icon.svg";
import TransactionIcon from "../assets/icons/transaction-icon.svg";
import IUser from "../interfaces/IUser";
import getUsers from "../services/getUsers";
import OverviewGridBox, {IOverview} from "../components/reusables/OverviewGridBox";
import {SearchInput} from "../components/base/SearchInput";
import DataTable from "../components/reusables/DataTable";
import {GridColDef} from "@mui/x-data-grid";
import {TableDate, TableTransactionStatus, UserSimpleInfo} from "../services/TableRenderCells";
import styles from "../assets/overview.module.scss";
import {NavLink} from "react-router-dom";
import {PROFILE} from "../routes";

const headers: GridColDef[] = [
    {
        field: 'firstName',
        headerName: 'Driver',
        renderCell: (params) => {
            return <UserSimpleInfo data={params.row} type="phone" />
        },
        width: 200
    },
    {
        field: 'deposits',
        headerName: 'Loan Amount',
        renderCell: (params) => (<span className={styles.trans_amount}>{params.row.lastTransaction.amount}</span>),
        width: 200
    },
    {
        field: 'date',
        headerName: 'Date Requested',
        renderCell: (params) => (<TableDate date={params.row.lastTransaction.date} />),
        width: 200
    },
    {
        field: 'transactionStatus',
        headerName: 'Loan Status',
        renderCell: (params) => (<TableTransactionStatus status={params.row.lastTransaction.status} />),
        width: 200
    },
    {
        field: 'actions',
        headerName: '',
        renderCell: (params) => (<NavLink to={PROFILE}>View</NavLink>)
    }
]

export default function Defaulters () {
    const overviews: IOverview[] = [
        {
            title: 'Total default amount(NGN)',
            value: '3,160,010',
            icon: WalletIcon
        },
        {
            title: 'Total default',
            value: '890,100',
            icon: RepayIcon
        },
        {
            title: 'Total number of defaulters',
            value: '316',
            icon: TransactionIcon
        }
    ]
    const items: IUser[] = getUsers()
    return (
        <div>
            <h4 className="mb-6 dashboard--page-title">Defaulters</h4>
            <OverviewGridBox overviews={overviews} />
            <div className="mt-12">
                <div className="flex justify-between">
                    <SearchInput label="Search for customer’s name" />
                </div>
                <div className="table w-full mt-4">
                    <DataTable headers={headers} items={items} />
                </div>
            </div>
        </div>
    )
}
