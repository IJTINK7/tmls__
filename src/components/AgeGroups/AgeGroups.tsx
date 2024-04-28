import styles from "./AgeGroups.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {CardType} from "../../store/card-reducer.ts";
export const AgeGroups = () => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards)
	return (
		<div className={styles.ageInfo}>
			<h4>Age Groups</h4>
			<div>
				<div>11 to 20</div>
				<div>{cards.filter(card => card.dob.age >= 11 && card.dob.age <= 20).length}</div>
			</div>
			<div>
				<div>21 to 30</div>
				<div>{cards.filter(card => card.dob.age >= 21 && card.dob.age <= 30).length}</div>
			</div>
			<div>
				<div>31 to 40</div>
				<div>{cards.filter(card => card.dob.age >= 31 && card.dob.age <= 40).length}</div>
			</div>
			<div>
				<div>41 to 50</div>
				<div>{cards.filter(card => card.dob.age >= 41 && card.dob.age <= 50).length}</div>
			</div>
			<div>
				<div>51+</div>
				<div>{cards.filter(card => card.dob.age >= 51).length}</div>
			</div>
		</div>
	);
};

