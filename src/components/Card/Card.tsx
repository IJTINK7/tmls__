import styles from "./Card.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store.ts";
import {CardType, getUsersThunkCreator} from "../../store/card-reducer.ts";
import {useEffect} from "react";
import trashIconPath from "../../assets/trash-icon.svg"

export type DateOptionsType = {
	day: 'numeric'
	month: 'long'
	year: 'numeric'
}

export const Card = () => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards)
	const loading = useSelector<AppRootStateType, boolean>(store => store.loading)
	const dispatch = useAppDispatch()
	// const [isButtonVisible, setIsButtonVisible] = useState(true);

	useEffect(() => {
		dispatch(getUsersThunkCreator())
	}, [dispatch])


	return (
		<>
			{loading
				?
				<div>
					Loading ...
				</div>
				:
				cards.map((el) => {
						const timestamp = el.dob.date;
						const parsedDate = new Date(timestamp);
						const dateOptions: DateOptionsType = {day: 'numeric', month: 'long', year: 'numeric'};
						const formattedDate = parsedDate.toLocaleDateString('en-US', dateOptions);

						return (
							<div className={styles.card} key={el.login.uuid}>
								<div className={styles.personalData}>
									<div className={styles.photo}>
										<img src={el.picture.large} alt="image"/>
									</div>
									<div className={styles.nameAndMail}>
										<div className={styles.name}>{el.name.first} {el.name.last}</div>
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
									{true && (
										<button className={styles.button}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="24px" height="24px">
												<use xlinkHref={`${trashIconPath}#trash`}/>
											</svg>
										</button>
									)}
								</div>

							</div>
						)
					}
				)}
		</>
	);
};