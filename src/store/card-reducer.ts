import {cardsApi} from "../api/cards-api.ts";
import {AppThunkDispatch, ThunkActionType} from "./store.ts";
import {changeLoaderActionCreator} from "./loading-reducer.ts";

const initialState: CardType[] = []

export type CardType = {
	"login": {
		"uuid": string
	},
	"picture": {
		"large": string
	},
	"gender": string
	"name": {
		"first": string
		"last": string
	},
	"email": string
	"phone": string
	"dob": {
		"date": string
		"age": number
	},
	"location": {
		"city": string
		"state": string
		"country": string
	}
}

export type getUsersType = ReturnType<typeof getUsersActionCreator>
export type deleteCurrentCard = ReturnType<typeof deleteCurrentCard>


export type CardsActionsType = getUsersType | deleteCurrentCard



export const cardReducer = (state: CardType[] = initialState, action: CardsActionsType): CardType[] => {
	switch (action.type) {
		case 'GET-USERS': {
			return action.state.map(el=>el)
		}
		case 'DELETE-CURRENT-CARD': {
			return state
		}
		default:
			return state;
	}
}

export const getUsersActionCreator = (state: CardType[]) => {
	return {type: 'GET-USERS', state} as const
}
export const deleteCurrentCard = () => {
	return {type: 'DELETE-CURRENT-CARD'} as const
}


export const getUsersThunkCreator = (): ThunkActionType => (dispatch: AppThunkDispatch) => {
	dispatch(changeLoaderActionCreator(true))
	cardsApi.getCards()
		.then((res) => {
			dispatch(getUsersActionCreator(res.data.results))
			dispatch(changeLoaderActionCreator(false))
		})
}
