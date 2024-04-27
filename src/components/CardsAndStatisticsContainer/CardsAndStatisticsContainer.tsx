import styles from "./CardsAndStatisticsContainer.module.css"
import {CardsContainer} from "../CardContainer/CardsContainer.tsx";
import {StatisticsContainer} from "../StatisticContainer/StatisticsContainer.tsx";
import {ScrollContainer} from "../ScrollContainer/ScrollContainer.tsx";
export const CardsAndStatisticsContainer = () => {
	return (
		<div className={styles.container}>
			<div><CardsContainer/></div>
			<div><ScrollContainer/></div>
			<div><StatisticsContainer/></div>
		</div>
	);
};