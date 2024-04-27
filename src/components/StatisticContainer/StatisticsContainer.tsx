import styles from "./StatisticsContainer.module.css"
import {AgeGroups} from "../AgeGroups/AgeGroups.tsx";
import {GenderGroups} from "../GenderGroups/GenderGroups.tsx";
export const StatisticsContainer = () => {
	return (
		<div className={styles.statisticsContainer}>
			<div>1000 Users (usersCount)</div>
			<hr/>
			<AgeGroups/>
			<hr/>
			<GenderGroups/>
		</div>
	);
};