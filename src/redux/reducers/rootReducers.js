import {combineReducers} from 'redux';
import {
    addDataReducer,
    AddErrorReducer,
    ChangeIsLoadedReducer,
    addFavoritesReducer
} from './reducers';


export const rootReducer = combineReducers({
    data: addDataReducer,
    error: AddErrorReducer,
    isLoad: ChangeIsLoadedReducer,
    favourites: addFavoritesReducer,
});