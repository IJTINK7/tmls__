import {CardList} from "../CardList/CardList.tsx";
import styles from "./CardsContainer.module.css"
export const CardsContainer = () => {
	return (
		<div className={`${styles.cardContainer} ${styles.scroll}`}>
			<CardList/>
		</div>
	);
};