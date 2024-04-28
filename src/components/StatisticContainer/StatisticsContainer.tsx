import styles from "./StatisticsContainer.module.css"
import {AgeGroups} from "../AgeGroups/AgeGroups.tsx";
import {GenderGroups} from "../GenderGroups/GenderGroups.tsx";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {CardType} from "../../store/card-reducer.ts";
export const StatisticsContainer = () => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards)
	return (
		<div className={styles.statisticsContainer}>
			<div>{cards.length} Users</div>
			<hr/>
			<AgeGroups/>
			<hr/>
			<GenderGroups/>
		</div>
	);
};