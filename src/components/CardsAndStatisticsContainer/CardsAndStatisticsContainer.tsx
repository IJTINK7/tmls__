import styles from "./CardsAndStatisticsContainer.module.css"
import {CardsContainer} from "../CardContainer/CardsContainer.tsx";
import {StatisticsContainer} from "../StatisticContainer/StatisticsContainer.tsx";
export const CardsAndStatisticsContainer = () => {
	return (
		<div className={styles.container}>
			<CardsContainer/>
			<StatisticsContainer/>
		</div>
	);
};