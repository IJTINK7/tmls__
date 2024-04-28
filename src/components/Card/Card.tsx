import styles from "./Card.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store.ts";
import {CardType, getUsersThunkCreator} from "../../store/card-reducer.ts";
import {useEffect} from "react";
import {setActiveCardActionCreator} from "../../store/activate-card-reducer.ts";
import {DeleteCardButton} from "../DeleteCardButton/DeleteCardButton.tsx";

export type DateOptionsType = {
	day: 'numeric'
	month: 'long'
	year: 'numeric'
}

export const Card = () => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards)
	const loading = useSelector<AppRootStateType, boolean>(store => store.loading)
	const activeCardId = useSelector<AppRootStateType, string>(store => store.activeCardId)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getUsersThunkCreator())
	}, [dispatch])

	const activateComponentHandler = (cardId: string) => {
		dispatch(setActiveCardActionCreator(cardId))
	}

	return (
		<>
			{loading
				?
				<div>
					Loading ...
				</div>
				:
				cards.map((el) => {
						const isCardActive = el.login.uuid === activeCardId;
						const timestamp = el.dob.date;
						const parsedDate = new Date(timestamp);
						const dateOptions: DateOptionsType = {day: 'numeric', month: 'long', year: 'numeric'};
						const formattedDate = parsedDate.toLocaleDateString('en-US', dateOptions);

						return (
							<div className={`${styles.card} ${isCardActive ? styles.active : ''}`} key={el.login.uuid} onClick={() => activateComponentHandler(el.login.uuid)}>
								<div className={styles.personalData}>
									<div className={styles.photo}>
										<img src={el.picture.large} alt="image"/>
									</div>
									<div className={styles.nameAndMail}>
										<div className={`${styles.name} ${isCardActive ? styles.activeName : ''}`}>{el.name.first} {el.name.last}</div>
										<div className={styles.email}>{el.email}</div>
									</div>
								</div>
								<div className={styles.additionalData}>
									<div className={styles.additionalDataContainer}>
										<div className={styles.phone}>Phone No</div>
										<div>{el.phone}</div>
									</div>
									<div className={styles.additionalDataContainer}>
										<div className={styles.birthday}>Birthday</div>
										<div>{formattedDate}</div>
									</div>
									<div className={styles.additionalDataContainer}>
										<div className={styles.address}>Address</div>
										<div>{el.location.city}, {el.location.state}, {el.location.country}</div>
									</div>
									<DeleteCardButton isCardActive={isCardActive} cardId={el.login.uuid}/>
								</div>
							</div>
						)
					}
				)}
		</>
	);
};