import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../store/store.ts";
import {CardType, getUsersThunkCreator} from "../../store/card-reducer.ts";
import {useEffect} from "react";

import {Card} from "../Card.tsx";
export const CardList = () => {
	const cards = useSelector<AppRootStateType, CardType[]>(store => store.cards)
	const loading = useSelector<AppRootStateType, boolean>(store => store.loading)
	const searchTitle = useSelector<AppRootStateType, string>(store => store.searchTitle)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getUsersThunkCreator())
	}, [dispatch])

	const keys = ['name.first', 'name.last', 'email', 'phone', 'dob.date', 'location.city', 'location.state', 'location.country'];
	const filteredCards = cards.filter(
		el => keys.some(prop => {
			if (prop === 'dob.date') {
				const formattedDate = new Date(el.dob.date).toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				});
				return formattedDate.toString().toLowerCase().includes(searchTitle.toLowerCase());
			}
			return el[prop as keyof CardType]?.toString().toLowerCase().includes(searchTitle.toLowerCase());
		})
	);

	return (
		<>
			{loading
				? <div>Loading ...</div>
				: filteredCards.length
					? filteredCards.map(el => <Card key={el.login.uuid} {...el}/>)
					: <div>User was not found. Please, enter another value.</div>
			}
		</>
	);
};