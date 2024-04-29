import styles from "./AgeGroups.module.css";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store.ts";
import { CardType } from "../../store/card-reducer.ts";

export const AgeGroups = () => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards);

	const countUsersInAgeRange = (minAge:number, maxAge:number) => {
		const count = cards.filter(card => card.dob.age >= minAge && (maxAge ? card.dob.age <= maxAge : true)).length;
		return `${count} ${count === 1 ? 'user' : 'users'}`;
	};

	return (
		<div className={styles.ageInfo}>
			<h4>Age Groups</h4>
			<div>
				<div>11 to 20</div>
				<div>{countUsersInAgeRange(11, 20)}</div>
			</div>
			<div>
				<div>21 to 30</div>
				<div>{countUsersInAgeRange(21, 30)}</div>
			</div>
			<div>
				<div>31 to 40</div>
				<div>{countUsersInAgeRange(31, 40)}</div>
			</div>
			<div>
				<div>41 to 50</div>
				<div>{countUsersInAgeRange(41, 50)}</div>
			</div>
			<div>
				<div>51+</div>
				<div>{countUsersInAgeRange(51, Infinity)}</div>
			</div>
		</div>
	);
};
