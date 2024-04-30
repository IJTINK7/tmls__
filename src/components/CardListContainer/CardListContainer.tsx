import "./CardListContainer.scss"
import {CardList} from "../CardList/CardList.tsx";

export const CardListContainer = () => {

	return (
		<div className="cardListContainer scroll">
			<div className="topGradient">TopGradient</div>
			<CardList/>
			<div className="bottomGradient">BottomGradient</div>
		</div>
	);
};