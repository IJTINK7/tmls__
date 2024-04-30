import React, {useState} from "react";
import "./Card.scss"
import {CardType} from "../../reducers/card-reducer.ts";
import {DeleteCardButton} from "../DeleteCardButton/DeleteCardButton.tsx";

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
		<div className={`card ${isCardActive ? "active" : ""}`} key={props.login.uuid} onClick={activateComponentHandler}>

			<div className="personalData">
				<div className="photo">
					<img src={props.picture.large} alt="image"/>
				</div>
				<div className="nameAndEmail">
					<div className="fullName">
						{props.name.first} {props.name.last}
					</div>
					<div className="email">{props.email}</div>
				</div>
			</div>

			<div className="additionalData">
				<div className="additionalDataKeys">
					<div>Phone No</div>
					<div>Birthday</div>
					<div>Address</div>
				</div>
				<div className="additionalDataValues">
					<div>{props.phone}</div>
					<div>{formattedDate}</div>
					<div>{props.location.city}, {props.location.state}, {props.location.country}</div>
				</div>
			</div>
			<DeleteCardButton isCardActive={isCardActive} cardId={props.login.uuid}/>
		</div>
	);
};