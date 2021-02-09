import {combineReducers} from 'redux';
import {AddDataReducer, AddErrorReducer, ChangeIsLoadedReducer, ChangeRolledUpReducer} from './reducers';


export const rootReducer = combineReducers({
    data: AddDataReducer,
    error: AddErrorReducer,
    isLoad: ChangeIsLoadedReducer,
    isRolled: ChangeRolledUpReducer
});