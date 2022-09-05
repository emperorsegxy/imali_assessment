import {BoxGrid} from "../components/BoxGrid";
import {CardBox} from "../components/CardBox";
import styles from "../assets/overview.module.scss"
import {SearchInput} from "../components/base/SearchInput";

interface CustomersOverview {
    title: string;
    percentage: number;
    value: string;
    increase?: boolean
}

export function Overview () {
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
    return (
        <div>
            <h4 className="mb-6 dashboard--page-title">Overview</h4>
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
            <div className={styles.table_box}>
                <div className="flex justify-between">
                    <SearchInput label="Search for driver’s name" />
                </div>
            </div>
        </div>
    )
}
