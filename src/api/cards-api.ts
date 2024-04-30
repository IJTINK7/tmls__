import axios from 'axios'
import {CardType} from "../store/card-reducer.ts";

export const cardsApi = {
	getCards() {
		return axios.get<CardType[]>("https://randomuser.me/api/?results=500");
	}
}