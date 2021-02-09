import axios from "axios/index";
import {Types} from './types'


export function changeLoadState(isLoad) {
    return {
        type: Types.CHANGE_ISLOAD,
        isLoad: isLoad
    }
}

export function rolledUpState (isRolled, number){
    return {
        type: Types.ROLL_UP,
        payload: {isRolled: !isRolled,
                    number: number}
    }
}



export function addData(data) {
console.log(data);
    return {
        type: Types.ADD_DATA,
        data: data,
    };
}

export function addError(data) {
    console.log(data);
    return {
        type: Types.ADD_ERROR,
        data: data,
    };
}


export const loadData = (url) => {
    return dispatch => {
        axios.get(url)
            .then(response => {(dispatch(addData(response.data.results)));
                dispatch(changeLoadState(true))
            })
        .catch(error => dispatch(addError(error)))
    }
}