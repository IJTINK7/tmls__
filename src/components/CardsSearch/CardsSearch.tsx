import styles from "./CardsSearch.module.css"
import {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store.ts";
import {changeSearchTitleActionCreator} from "../../store/change-search-title.ts";

export const CardsSearch = () => {
	const searchTitle = useSelector<AppRootStateType, string>(store => store.searchTitle)
	const dispatch = useAppDispatch()

	const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(changeSearchTitleActionCreator(e.currentTarget.value))
	}

	return <input type="text" value={searchTitle} className={styles.input} placeholder={"Search"} onChange={changeInputValueHandler}/>
};