import React, {useState} from 'react';
import styles from "./CardList/CardList.module.css";
import {DeleteCardButton} from "./DeleteCardButton/DeleteCardButton.tsx";
import {CardType} from "../store/card-reducer.ts";

export type DateOptionsType = {
	day: 'numeric'
	month: 'long'
	year: 'numeric'
}

export const Card: React.FC<CardType> = (props) => {
	const [isCardActive, setIsCardActive] = useState<boolean>(false)
	const timestamp = props.dob.date;
	const parsedDate = new Date(timestamp);
	const dateOptions: DateOptionsType = {day: 'numeric', month: 'long', year: 'numeric'};
	const formattedDate = parsedDate.toLocaleDateString('en-GB', dateOptions);
	const activateComponentHandler = () => {
		setIsCardActive(value => !value)
	}
	return (
		<div className={`${styles.card} ${isCardActive ? styles.active : ''}`} key={props.login.uuid} onClick={activateComponentHandler}>
			<div className={styles.personalData}>
				<div className={styles.photo}>
					<img src={props.picture.large} alt="image"/>
				</div>
				<div className={styles.nameAndMail}>
					<div className={`${styles.name} ${isCardActive ? styles.activeName : ''}`}>
						{props.name.first} {props.name.last}
					</div>
					<div className={styles.email}>{props.email}</div>
				</div>
			</div>
			<div className={styles.additionalData}>
				<div className={styles.additionalDataContainer}>
					<div className={styles.phone}>Phone No</div>
					<div>{props.phone}</div>
				</div>
				<div className={styles.additionalDataContainer}>
					<div className={styles.birthday}>Birthday</div>
					<div>{formattedDate}</div>
				</div>
				<div className={styles.additionalDataContainer}>
					<div className={styles.address}>Address</div>
					<div>{props.location.city}, {props.location.state}, {props.location.country}</div>
				</div>
				<DeleteCardButton isCardActive={isCardActive} cardId={props.login.uuid}/>
			</div>
		</div>
	);
};