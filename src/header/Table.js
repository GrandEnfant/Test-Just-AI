import {FavoritesColumn} from '../favorites/favorites'
import {useState} from 'react';
import PropTypes from 'prop-types';
import {Group} from "../group/Group";
import './style.css'


export const Table = ({data, isRolled, dispatch}) => {

    Table.propTypes = {
        data: PropTypes.object,
        isRolled: PropTypes.object,
        dispatch: PropTypes.func,
    };
    const [substring, setSubstring] = useState('');
    const startSearchSubstring = (evt) => {
        setSubstring(evt.target.value);
    };

    return (
        <div className={"table"}>
            <div className={"table-col1"}>
                <input placeholder={"Поиск"} type={'text'} value={substring} onChange={startSearchSubstring}/>
                <Group data={data} dispatch={dispatch} isRolled={isRolled} substring={substring}/>
            </div>
            <FavoritesColumn dispatch={dispatch}/>
        </div>
    );
};