import { Waypoint } from 'react-waypoint';
import {useCallback, useEffect, useState} from 'react';
import './style.css';
import {ArrData, DataType} from '../redux/types';
import Card from '../card';
import {useDispatch, useSelector} from 'react-redux';
import {loadData} from '../redux/actions';

interface Props {
    data: ArrData,
    isRolled: boolean,
    substring: string,
}

const Group = ({data, substring}: Props) => {
    useEffect(() => {
        setGroup(data.data);
    }, [data.data.length]);
    const dispatch = useDispatch();
    let [count, setCount] = useState(1);
    const [group, setGroup] = useState(data.data);
    const setNewFilteredValue = useCallback((substring: string) => {
        setGroup(searchSubstring(data.data, substring));
    }, [data]);
    const searchSubstring = (group: Array<DataType>, substring: string) => {
        return group.filter((item: DataType) => item.name.first.includes(substring));
    };

    const loadNewPage = () => {
        setCount(++count);
        dispatch(loadData(count));
    };
    const isLoading = useSelector((state: { isLoad: boolean; }) => state.isLoad);
    useEffect(() => {
        setNewFilteredValue(substring);
    }, [substring]);
    return (
        <div className={'group'}>
            {group.map( item => <Card substring={substring} dispatch={dispatch} key={item.id.value}
                item={item}/>)}
            {isLoading && <h2> Загружаю... </h2>}
            <Waypoint onEnter={loadNewPage}/>
        </div>
    );
};

export default Group;