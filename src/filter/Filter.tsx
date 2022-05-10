import React, {Dispatch, SetStateAction, useCallback} from 'react';
import {DataType} from '../redux/types';
import './style.css';

interface Props {
    data: Array<DataType>,
    setSubstring: Dispatch<SetStateAction<string>>,
    substring: string,
}
const Filter = ({data, setSubstring, substring}: Props) => {

    const startSearchSubstring = (evt: any) => {
        setSubstring(evt.target.value);
    };
    useCallback((substring: string) => {
        searchSubstring(data, substring);
    }, [substring]);
    const searchSubstring = useCallback((group: Array<DataType>, substring: string) => {
        return group.filter((item: DataType) => {
            return item.name.first.includes(substring);
        });
    }, [substring]);
    return (
        <div className={'container'}>
            <input className={'input'} placeholder={'Поиск'} type={'text'} value={substring} onChange={startSearchSubstring}/>
        </div>);
};

export default Filter;