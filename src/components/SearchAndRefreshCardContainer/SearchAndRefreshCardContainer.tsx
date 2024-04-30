import {RefreshUsersButton} from "../RefreshUsersButton/RefreshUsersButton.tsx";
import styles from "./SearchAndRefreshCardContainer.module.css"
import {CardsSearchInput} from "../CardsSearchInput/CardsSearchInput.tsx";

export const SearchAndRefreshCardContainer = () => {
	return (
		<div className={styles.container}>
			<CardsSearchInput/>
			<RefreshUsersButton/>
		</div>
	);
};