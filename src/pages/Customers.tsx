import {BoxGrid} from "../components/BoxGrid";
import {CardBox} from "../components/CardBox";
import styles from "../assets/customers.module.scss"
import {SearchInput} from "../components/base/SearchInput";
import IUser from "../interfaces/IUser";
import getUsers from "../services/getUsers";
import DataTable from "../components/reusables/DataTable";
import {GridColDef} from "@mui/x-data-grid";
import {KYCStatus, TableDate, UserSimpleInfo} from "../services/TableRenderCells";
import {Link, NavLink} from "react-router-dom";
import {PROFILE} from "../routes";

interface CustomersOverview {
    title: string;
    percentage: number;
    value: string;
    increase?: boolean
}

const headers: GridColDef[] = [
    {
        field: 'id',
        headerName: 'id',
        renderCell: (params) => (<span>#{params.row.id}</span>)
    },
    {
        field: 'customer',
        headerName: 'customer',
        renderCell: (params) => (<UserSimpleInfo data={params.row} type="phone" />),
        width: 250
    },
    {
        field: 'date',
        headerName: 'date registered',
        renderCell: (params) => (<TableDate date={params.row.date} />),
        width: 200
    },
    {
        field: 'kyc',
        headerName: 'KYC Status',
        renderCell: (params) => (<KYCStatus verified={params.row.KYCStatus} />),
        width: 200
    },
    {
        field: 'actions',
        headerName: '',
        renderCell: (params) => (<NavLink to={PROFILE}>View</NavLink>)
    }
]

export function Customers () {
    const customersOverview: CustomersOverview[] = [
        {
            title: 'Total customers',
            percentage: 40,
            value: "2,420",
            increase: true
        },
        {
            title: 'Total active customers',
            percentage: 10,
            value: "1,420"
        },
        {
            title: 'Total defaulters',
            percentage: 20,
            value: "316"
        }
    ]

    const items: IUser[] = getUsers().splice(0, 3)
    return (
        <div>
            <h4 className="mb-6 dashboard--page-title">Customers</h4>
            <div>
                <BoxGrid>
                    {
                        customersOverview.map((_overview, i) => (
                            <CardBox key={i}>
                                <div className={styles.card_title}>{_overview.title}</div>
                                <div className={styles.card_value}>{_overview.value}</div>
                                <div className={styles[_overview.increase ? 'increase' : 'decrease'] + ' flex items-center'}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99996 15.8334V4.16669M9.99996 4.16669L4.16663 10M9.99996 4.16669L15.8333 10" stroke={_overview.increase ? '#12B76A' : '#F04438'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className={`${styles.percentage} mr-1`}>{_overview.percentage}%</span>
                                    <span>vs last month</span>
                                </div>
                            </CardBox>
                        ))
                    }
                </BoxGrid>
            </div>
            <div className={'mt-12'}>
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
