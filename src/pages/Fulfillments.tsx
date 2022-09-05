import OverviewGridBox from "../components/reusables/OverviewGridBox";
import {SearchInput} from "../components/base/SearchInput";
import DataTable from "../components/reusables/DataTable";
import IUser from "../interfaces/IUser";
import getUsers from "../services/getUsers";
import {GridColDef} from "@mui/x-data-grid";
import {TableDate, TableTransactionStatus, UserSimpleInfo} from "../services/TableRenderCells";
import styles from "../assets/overview.module.scss";
import {Link} from "react-router-dom";

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
        headerName: 'Price',
        renderCell: (params) => (<span className={styles.trans_amount}>{params.row.lastTransaction.amount}</span>),
        width: 200
    },
    {
        field: 'date',
        headerName: 'Date',
        renderCell: (params) => (<TableDate date={params.row.lastTransaction.date} />),
        width: 200
    },
    {
        field: 'model',
        headerName: 'Vehicle Model',
        renderCell: (params) => (<span>Mazda - Model Q</span>),
        width: 200
    },
    {
        field: 'transactionStatus',
        headerName: 'Col Status',
        renderCell: (params) => (<TableTransactionStatus status={params.row.lastTransaction.status} />),
        width: 200
    }
]

export default function Fulfillments () {
    const items: IUser[] = getUsers()
    return (
        <div>
            <h4 className="mb-6 dashboard--page-title">Fulfillments</h4>
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
