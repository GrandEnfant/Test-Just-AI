import { Waypoint } from 'react-waypoint';
import React, { useEffect, useState } from 'react';
import './style.css';
import { DataType } from '../redux/types';
import Card from '../card';
import {useDispatch, useSelector} from 'react-redux';
import {loadData} from '../redux/actions';
import Filter from '../filter';

interface Props {
    data: Array<DataType>,
}

const Group = ({data}: Props) => {
    useEffect(() => {
        setGroup(data);
    }, [data.length]);
    const dispatch = useDispatch();
    let [count, setCount] = useState(1);
    const [group, setGroup] = useState(data);
    let [substring, setSubstring] = useState('');
    const loadNewPage = () => {
        setCount(++count);
        dispatch(loadData(count));
    };
    const isLoading = useSelector((state: { isLoad: boolean; }) => state.isLoad);

    return (
        <div className={'group'}>
            <Filter substring={substring} setSubstring={setSubstring} data={data}/>
            {group.map( item => <Card substring={substring} key={item.id.value}
                item={item}/>)}
            {isLoading && <h2> Загружаю... </h2>}
            <Waypoint onEnter={loadNewPage}/>
        </div>
    );
};

export default Group;