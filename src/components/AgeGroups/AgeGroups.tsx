import styles from "./AgeGroups.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {CardType} from "../../store/card-reducer.ts";

export const AgeGroups = () => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards);

	const countUsersInAgeRange = (minAge: number, maxAge: number) => {
		const count = cards.filter(card => card.dob.age >= minAge && (maxAge ? card.dob.age <= maxAge : true)).length;
		return `${count} ${count === 1 ? 'user' : 'users'}`;
	};

	return (
		<div className={styles.ageInfo}>
			<h4>Age Groups</h4>
			<div className={styles.ageGroup}>
				<div className={styles.ages}>
					<div>11 to 20</div>
					<div>21 to 30</div>
					<div>31 to 40</div>
					<div>41 to 50</div>
					<div>51+</div>
				</div>
				<div className={styles.usersCount}>
					<div>{countUsersInAgeRange(11, 20)}</div>
					<div>{countUsersInAgeRange(21, 30)}</div>
					<div>{countUsersInAgeRange(31, 40)}</div>
					<div>{countUsersInAgeRange(41, 50)}</div>
					<div>{countUsersInAgeRange(51, Infinity)}</div>
				</div>
			</div>
		</div>
	);
};



