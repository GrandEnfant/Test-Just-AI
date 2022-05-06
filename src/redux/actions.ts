import axios from 'axios/index';
import {DataType, Types} from './types';


export function changeLoadState(isLoad: boolean) {
    return {
        type: Types.CHANGE_ISLOAD,
        isLoad: isLoad
    };
}
export function addFavorites(card: DataType) {
    debugger;
    return {
        type: Types.ADD_FAVORITES,
        card: card
    };
}


export function addData(data: DataType) {
    return {
        type: Types.ADD_DATA,
        data: data,
    };
}

export function addError(data: DataType) {
    return {
        type: Types.ADD_ERROR,
        data: data,
    };
}

export function deleteCard(card: DataType) {
    return {
        type: Types.DELETE_CARD,
        card: card,
    };
}


export const loadData = (count: number) => {
    const DEFAULT_PER_PAGE = 10*count;
    console.log(DEFAULT_PER_PAGE);
    const url: string = 'https://randomuser.me/api/';
    return (dispatch: (arg0: { type: string; data?: DataType; isLoad?: boolean; }) => void) => {
        axios.get(`${url}?results=${DEFAULT_PER_PAGE}`)
            .then(response => {
                (dispatch(addData(response.data.results)));
                dispatch(changeLoadState(true));
            })
            .catch(error => dispatch(addError(error)));
    };
};