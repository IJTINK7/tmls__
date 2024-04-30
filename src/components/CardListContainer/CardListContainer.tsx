import "./CardListContainer.scss"
import {CardList} from "../CardList/CardList.tsx";
export const CardListContainer = () => {
	return (
		<div className="cardListContainer scroll">
			<CardList/>
		</div>
	);
};