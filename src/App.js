import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {loadData} from './redux/actions';
import {useEffect} from 'react';
import {Header} from './Header';

function App() {
    const data = useSelector((state) => state.data);
    const isLoad = useSelector((state) => state.isLoad);
    const isRolled = useSelector((state) => state.isRolled);
    const URL = 'https://randomuser.me/api/?results=1000';
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData(URL));
    }, [URL, dispatch]);
    return (
        <div>
            {!isLoad ? <span> Loading... </span> :
                <Header isRolled = {isRolled} dispatch={dispatch} data={data.data}/>
            }
        </div>
    );
}

export default App;
