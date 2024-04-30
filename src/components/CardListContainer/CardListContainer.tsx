import "./CardListContainer.scss"
import {CardList} from "../CardList/CardList.tsx";

export const CardListContainer = () => {
	return (
		<div className="cardsContainer scroll">
			<CardList/>
		</div>
	);
};