import {combineReducers} from 'redux';
import {
    addDataReducer,
    AddErrorReducer,
    ChangeIsLoadedReducer,
    ChangeRolledUpReducer,
    addFavoritesReducer
} from './reducers';


export const rootReducer = combineReducers({
    data: addDataReducer,
    error: AddErrorReducer,
    isLoad: ChangeIsLoadedReducer,
    isRolled: ChangeRolledUpReducer,
    favorites: addFavoritesReducer,
});