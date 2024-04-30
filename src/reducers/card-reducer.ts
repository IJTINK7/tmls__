import {AppThunkDispatch, ThunkActionType} from "../store/store.ts";
import {changeLoaderActionCreator} from "./loading-reducer.ts";
import {cardsApi} from "../api/cards-api.ts";

const initialState: CardType[] = [];

export type CardType = {
	gender: string;
	name: {
		title: string;
		first: string;
		last: string;
	};
	location: {
		street: {
			number: number;
			name: string;
		};
		city: string;
		state: string;
		country: string;
		postcode: number;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		timezone: {
			offset: string;
			description: string;
		};
	};
	email: string;
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
		sha1: string;
		sha256: string;
	};
	dob: {
		date: string;
		age: number;
	};
	registered: {
		date: string;
		age: number;
	};
	phone: string;
	cell: string;
	id: {
		name: string;
		value: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	nat: string;
};


export type GetUsersType = ReturnType<typeof getUsersActionCreator>;
export type DeleteCurrentCard = ReturnType<typeof deleteCurrentCardActionCreator>;

export type CardsActionsType = GetUsersType | DeleteCurrentCard;

export const cardReducer = (state: CardType[] = initialState, action: CardsActionsType): CardType[] => {
	switch (action.type) {
		case 'GET-USERS': {
			return action.state;
		}
		case 'DELETE-CURRENT-CARD': {
			return state.filter((el) => el.login.uuid !== action.cardId);
		}
		default:
			return state
	}
};

export const getUsersActionCreator = (state: CardType[]) => {
	return {type: 'GET-USERS', state} as const;
};

export const deleteCurrentCardActionCreator = (cardId: string) => {
	return {type: 'DELETE-CURRENT-CARD', cardId} as const;
}

export const getUsersThunkCreator = (): ThunkActionType => (dispatch: AppThunkDispatch) => {
	dispatch(changeLoaderActionCreator(true));
	cardsApi.getCards()
		.then((res) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			dispatch(getUsersActionCreator(res.data.results));
			dispatch(changeLoaderActionCreator(false));
		});
};