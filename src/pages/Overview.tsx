import WalletIcon from "../assets/icons/_wallet.svg"
import styles from '../assets/overview.module.scss'
import RepayIcon from "../assets/icons/repay-icon.svg"
import TransactionIcon from "../assets/icons/transaction-icon.svg"
import {SearchInput} from "../components/base/SearchInput";
import DataTable from "../components/reusables/DataTable";
import {GridColDef} from "@mui/x-data-grid";
import {TableDate, TableTransactionStatus, UserSimpleInfo} from "../services/TableRenderCells";
import IUser from "../interfaces/IUser";
import getUsers from "../services/getUsers";
import OverviewGridBox, {IOverview} from "../components/reusables/OverviewGridBox";

const headers: GridColDef[] = [
    {
        field: 'firstName',
        headerName: 'Customers',
        renderCell: (params) => {
            return <UserSimpleInfo data={params.row} type="phone" />
        },
        width: 200
    },
    {
        field: 'deposits',
        headerName: 'Deposits',
        renderCell: (params) => (<span className={styles.trans_amount}>{params.row.lastTransaction.amount}</span>),
        width: 200
    },
    {
        field: 'date',
        headerName: 'Date',
        renderCell: (params) => (<TableDate date={params.row.lastTransaction.date} displayTime />),
        width: 200
    },
    {
        field: 'voucherNo',
        headerName: 'VOUCHER NO.',
        renderCell: (params) => (<span className={styles.voucher_no}>{params.row.lastTransaction.voucherNo}</span>),
        width: 200
    },
    {
        field: 'transactionStatus',
        headerName: 'Trans. Status',
        renderCell: (params) => (<TableTransactionStatus status={params.row.lastTransaction.status} />),
        width: 200
    }
]

export default function Overview () {
    const overviews: IOverview[] = [
        {
            title: 'Total outstanding balance',
            value: '6,709,288',
            icon: WalletIcon
        },
        {
            title: 'Total repayment pending',
            value: '72,864',
            icon: RepayIcon
        },
        {
            title: 'Total transactions count',
            value: '3,062',
            icon: TransactionIcon
        }
    ]
    const items: IUser[] = getUsers()
    return (
        <div>
            <h4 className="mb-6 dashboard--page-title">Overview</h4>
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
