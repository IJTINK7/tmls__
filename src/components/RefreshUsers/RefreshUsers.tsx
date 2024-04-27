import styles from "./RefreshUsers.module.css"
export const RefreshUsers = () => {
	const refreshUsersHandler = () => {
		// cardsApi.getCards()
	}
	return (
		<button className={styles.button} onClick={refreshUsersHandler}>Refresh Users</button>
	);
};