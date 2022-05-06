import './App.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ArrData} from './redux/types';
import Table from './header';
import {loadData} from './redux/actions';

function App() {
    const data = useSelector((state: { data: ArrData; }) => state.data);
    const isLoad = useSelector((state: { isLoad: boolean; }) => state.isLoad);
    const isRolled = useSelector((state: { isRolled: boolean; }) => state.isRolled);
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(loadData(1));
    }, [URL]);
    return (
        <>
            {!isLoad ? <span> Loading...</span> :
                <>
                    <Table isRolled={isRolled} data={data}/>
                </>}
        </>
    );
}

export default App;