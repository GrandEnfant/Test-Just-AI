import React from 'react';
import './style.css';
import {DataType} from '../redux/types';
import FavouritesList from '../favorites';
import Group from '../group';

interface Props {
    data: Array<DataType>,
}

const Table = ({data}: Props) => {

    return (
        <div className={'table'}>
            <div className={'table-col1'}>
                <Group data={data} />
            </div>
            <FavouritesList/>
        </div>
    );
};

export default Table;