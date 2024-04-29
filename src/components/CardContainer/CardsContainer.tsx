import {Card} from "../Card/Card.tsx";
import styles from "./CardsContainer.module.css"
export const CardsContainer = () => {
	return (
		<div className={`${styles.cardContainer} ${styles.scroll}`}>
			<Card/>
		</div>
	);
};