import {cardsApi} from "../api/cards-api.ts";
import {AppThunkDispatch, ThunkActionType} from "./store.ts";

const initialState: CardType[] = [
	{
		"login": {
			"uuid": ""
		},
		"picture": {
			"large": ""
		},
		"gender": "",
		"name": {
			"first": "",
			"last": ""
		},
		"email": "",
		"phone": "",
		"dob": {
			"date": "",
			"age": 0
		},
		"location": {
			"city": "",
			"state": "",
			"country": ""
		}
	}
]

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


export type ActionsType = getUsersType | deleteCurrentCard



export const cardReducer = (state: CardType[] = initialState, action: ActionsType): CardType[] => {
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
	cardsApi.getCards()
		.then((res) => {
			dispatch(getUsersActionCreator(res.data.results))
		})
}
