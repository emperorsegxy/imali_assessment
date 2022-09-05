import {CardBox} from "../CardBox";
import styles from "../../assets/overview.module.scss";
import {BoxGrid} from "../BoxGrid";

export interface IOverview {
    title: string;
    value: string;
    icon: string;
}

export default function OverviewGridBox ({ overviews }: { overviews: IOverview[] }) {
    return (
        <BoxGrid>
            {overviews.map((_overview, i) => (
                <CardBox key={i} height={192}>
                    <div>
                        <div className="flex justify-between">
                            <img src={_overview.icon} alt={_overview.title} />
                        </div>
                        <div className="mt-6">
                            <span className={`mb-2 ${styles.card__title}`}>{_overview.title}</span>
                            <div className={`${styles.card__value}`}>{_overview.value}</div>
                        </div>
                    </div>
                </CardBox>
            ))}
        </BoxGrid>
    )
}
