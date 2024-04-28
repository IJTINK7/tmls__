export type ActiveCardIdType = string

const initialState: ActiveCardIdType = ""

export type SetActiveCardACType = ReturnType<typeof setActiveCardActionCreator>

export type CardActivityActionsType = SetActiveCardACType

export const setActiveCardReducer = (state: ActiveCardIdType = initialState, action: CardActivityActionsType): ActiveCardIdType => {
	switch (action.type) {
		case 'SET-ACTIVE-CARD': {
			return action.cardId
		}
		default:
			return state;
	}
}

export const setActiveCardActionCreator = (cardId: string) => {
	return {type: 'SET-ACTIVE-CARD', cardId} as const
}