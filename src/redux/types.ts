export const Types = {
    ADD_DATA: 'ADD_DATA',
    ADD_ERROR: 'ADD_ERROR',
    CHANGE_ISLOAD: 'CHANGE_ISLOAD',
    ROLL_UP: 'ROLL_UP',
    ADD_FAVORITES: 'FAVORITES',
    DELETE_CARD: 'DELETE_CARD'
};

export interface DataType {
    dob: {date: string, age: number},
    email: string,
        gender: 'male' | 'female',
        id: {name: string, value: null},
    location: {location: {number:number,name:string}, city: string, state: string, country: string, postcode: number},
    login: {uuid: string, username: string, password: string,},
    name: {title: string, first: string, last: string},
    nat: string,
        phone: string,
        picture: {large: string, medium: string, thumbnail: string},
    registered: {date: string, age: number},
}

export interface ArrData {
    data: Array<DataType>
}
