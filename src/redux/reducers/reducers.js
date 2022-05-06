import {Types} from '../types';

const dataInitial = {data: ''};
const favoritesInitial = [];

export const addDataReducer = (state = dataInitial, action) => {
    switch (action.type) {
    case Types.ADD_DATA: {
        const copiedState = state;
        copiedState.data = action.data;
        return {...copiedState};
    }
    default:
        return state;
    }
};
export const AddErrorReducer = (state = dataInitial, action) => {
    switch (action.type) {
    case Types.ADD_ERROR: {
        const copiedState = state;
        copiedState.data = action.data;
        return {...copiedState};
    }
    default:
        return state;
    }
};
export const ChangeIsLoadedReducer = (state = false, action) => {
    switch (action.type) {
    case Types.CHANGE_ISLOAD: {
        let copiedState = state;
        copiedState = action.isLoad;
        return {...copiedState};
    }
    default:
        return state;
    }
};

export const addFavoritesReducer = (state = favoritesInitial, action) => {
    debugger;
    switch (action.type) {
    case Types.ADD_FAVORITES: {
        let mySet = new Set(state);
        mySet.add(action.card);
        return Array.from(mySet);
    }
    case Types.DELETE_CARD: {
        let mySet = new Set(state);
        mySet.delete(action.card);
        return Array.from(mySet);
    }
    default:
        return state;
    }
};

