import styles from "../AgeGroups/AgeGroups.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {CardType} from "../../store/card-reducer.ts";

export const GenderGroups = () => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards)
	return (
		<div className={styles.ageInfo}>
			<h4>Gender Groups</h4>
			<div>
				<div>Male</div>
				<div>{cards.filter(el=>el.gender !== "female").length}</div>
			</div>
			<div>
				<div>Female</div>
				<div>{cards.filter(el=>el.gender !== "male").length}</div>
			</div>
		</div>

	);
};