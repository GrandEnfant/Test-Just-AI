import './App.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DataType} from './redux/types';
import Table from './header';
import {loadData} from './redux/actions';

function App() {
    const data = useSelector((state: { data: Array<DataType>; }) => state.data);
    const isLoad = useSelector((state: { isLoad: boolean; }) => state.isLoad);
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(loadData(1));
    }, []);
    return (
        <>
            {!isLoad ? <span> Loading...</span> :
                <Table data={data}/>
            }
        </>
    );
}

export default App;