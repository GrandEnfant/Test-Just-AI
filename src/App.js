import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {loadData} from './redux/actions';
import {useEffect} from 'react';
import {Table} from './header/Table';

function App() {
    const data = useSelector((state) => state.data);
    const isLoad = useSelector((state) => state.isLoad);
    const isRolled = useSelector((state) => state.isRolled);
    const URL = 'https://randomuser.me/api/?results=1000';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData(URL));
    }, [URL]);

    return (
        <>
            {!isLoad ? <span> Loading...</span> :
                <Table isRolled = {isRolled} dispatch={dispatch} data={data.data}/>
            }
        </>
    );
}

export default App;
