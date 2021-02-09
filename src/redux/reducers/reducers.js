
import {Types} from "../types";


const dataInitial = {data: ''};
const rolledInitial = {firstGroup: false,
                        secondGroup: false,
                        thirdGroup: false
}


export const AddDataReducer = (state = dataInitial, action) => {
    switch (action.type) {
        case Types.ADD_DATA: {
            const copiedState = state;
            copiedState.data = action.data;
            return {...copiedState};
        }
        default: return state;
    }
};
export const AddErrorReducer = (state = dataInitial, action) => {
    switch (action.type) {
        case Types.ADD_ERROR: {
            const copiedState = state;
            copiedState.data = action.data;
            return {...copiedState};
        }
        default: return state;
    }
};
export const ChangeIsLoadedReducer = (state = false, action) => {
    switch (action.type) {
        case Types.CHANGE_ISLOAD: {
            let copiedState = state;
            copiedState = action.isLoad;
            return {...copiedState};
        }
        default: return state;
    }
};
export const ChangeRolledUpReducer = (state = rolledInitial, action) => {
    switch (action.type) {
        case Types.ROLL_UP: {
            let copiedState = state;
            if(action.payload.number === 'firstGroup') {
                copiedState.firstGroup = action.payload.isRolled;
            } else if(action.payload.number === 'secondGroup') {
                copiedState.secondGroup = action.payload.isRolled;
            } else if(action.payload.number === 'thirdGroup') {
                copiedState.thirdGroup = action.payload.isRolled;
            }
                return {...copiedState};
        }
        default: return state;
    }
};