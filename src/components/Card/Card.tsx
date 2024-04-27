import {useEffect, useState} from "react";
import {cardsApi} from "../../api/cards-api.ts";
import styles from "./Card.module.css"

export  type CardDataType = {
	dob: {
		date: string
	}
	login: {
		uuid: string
	}
	picture: {
		large: string
	}
	name: {
		first: string
		last: string
	}
	email: string
	phone: string
	location: {
		city: string
		state: string
		country: string
	}
}

export type DateOptionsType = {
	day: 'numeric'
	month: 'long'
	year: 'numeric'
}

export const Card = () => {

	const [state, setState] = useState<CardDataType[]>([])
	useEffect(() => {
		cardsApi.getCards()
			.then((res) => {
				setState(res.data.results)
			})
	}, [])
	return (
		<>
			{state.map((el) => {
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
							</div>

						</div>
					)
				}
			)}
		</>
	);
};