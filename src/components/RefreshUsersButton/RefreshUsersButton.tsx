import {useAppDispatch} from "../../store/store.ts";
import {getUsersThunkCreator} from "../../store/card-reducer.ts";
import styles from "./RefreshUsersButton.module.css"

export const RefreshUsersButton = () => {
	const dispatch = useAppDispatch()

	const refreshUsersHandler = () => {
		dispatch(getUsersThunkCreator())
	}
	return (
		<button className={styles.button} onClick={refreshUsersHandler}>Refresh Users</button>
	);
};