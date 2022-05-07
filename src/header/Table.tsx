import React from 'react';
import {DataType} from '../redux/types';
import FavouritesList from '../favorites';
import Group from '../group';
import './style.css';

interface Props {
    data: Array<DataType>,
}

const Table = ({data}: Props) => {
    const handlerDragOver = (evt: any) => {
        evt.preventDefault();
        evt.target.style.background = '#ffffdc';
    };
    const handlerDragLeave = (evt: any) => {
        evt.preventDefault();
        evt.target.style.background = 'none';
    };
    const handlerDrop = (evt: any) => {
        evt.preventDefault();
        evt.target.style.background = 'none';
    };
    return (
        <div className={'table'}>
            <div className={'table-col'}>
                <h2 className={'header'}>Пользователи</h2>
                <Group data={data} />
            </div>
            <div className={'table-col'}
                onDragOver={(evt) => handlerDragOver(evt)}
                onDragLeave = {(evt) => handlerDragLeave(evt)}
                onDrop={(evt) => handlerDrop(evt)}>
                <h2 className={'header'}>Избранные</h2>
                <FavouritesList />
            </div>
        </div>
    );
};

export default Table;