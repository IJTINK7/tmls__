import {CardsSearch} from "../CardsSearch/CardsSearch.tsx";
import {RefreshUsers} from "../RefreshUsers/RefreshUsers.tsx";
import styles from "./SearchAndRefreshCardContainer.module.css"

export const SearchAndRefreshCardContainer = () => {
	return (
		<div className={styles.container}>
			<CardsSearch/>
			<RefreshUsers/>
		</div>
	);
};