const initialState: boolean = false

export type changeLoaderACType = ReturnType<typeof changeLoaderActionCreator>

export type LoadingActionsType = changeLoaderACType

export const loadingReducer = (state: boolean = initialState, action: LoadingActionsType): boolean => {
	switch (action.type) {
		case 'CHANGE-LOADER': {
			return action.isLoading
		}
		default:
			return state;
	}
}

export const changeLoaderActionCreator = (isLoading:boolean) => {
	return {type: 'CHANGE-LOADER', isLoading} as const
}