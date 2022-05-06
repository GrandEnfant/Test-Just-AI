import React, {useState} from 'react';
import './style.css';
import { ArrData } from '../redux/types';
import FavouritesList from '../favorites';
import Group from '../group';

interface Props {
    data: ArrData,
    isRolled: boolean,
}

const Table = ({data, isRolled}: Props) => {

    const [substring, setSubstring] = useState('');
    const startSearchSubstring = (evt: any) => {
        setSubstring(evt.target.value);
    };


    return (
        <div className={'table'}>
            <div className={'table-col1'}>
                <input placeholder={'Поиск'} type={'text'} value={substring} onChange={startSearchSubstring}/>
                <Group data={data} isRolled={isRolled} substring={substring}/>
            </div>
            <FavouritesList/>
        </div>
    );
};

export default Table;