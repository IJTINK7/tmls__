import {combineReducers, applyMiddleware, createStore } from 'redux'
import {ThunkDispatch, ThunkAction, thunk} from 'redux-thunk'
import {useDispatch} from "react-redux";
import {ActionsType, cardReducer} from "./card-reducer.ts";

const rootReducer = combineReducers({
	cards: cardReducer,
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type ThunkActionType = ThunkAction<void, AppRootStateType, unknown, ActionsType>;
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, ActionsType>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();


