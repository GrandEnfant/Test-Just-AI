import {rolledUpState} from '../redux/actions';
import {Card} from '../card/card';
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Group = ({data, dispatch, isRolled, substring}) => {
    Group.propTypes = {
        data: PropTypes.array,
        dispatch: PropTypes.func,
        isRolled: PropTypes.object,
        substring: PropTypes.string,
    };

    const first_group = data.filter(item => item.registered.age <= 10);
    const second_group = data.filter(item => item.registered.age <= 20 && item.registered.age > 10);
    const third_group = data.filter(item => item.registered.age <= 30 && item.registered.age > 20);
    const [firstFilteredGroup, setFirstFilteredGroup] = useState(first_group);
    const [secondFilteredGroup, setSecondFilteredGroup] = useState(second_group);
    const [thirdFilteredGroup, setThirdFilteredGroup] = useState(third_group);

    const setNewFilteredValue = (substring) => {
        setFirstFilteredGroup(searchSubstring(first_group, substring));
        setSecondFilteredGroup(searchSubstring(second_group, substring));
        setThirdFilteredGroup(searchSubstring(third_group, substring));
    };
    const searchSubstring = (group, substring) => {
        return group.filter(item => item.name.first.includes(substring));
    };

    useEffect(() => {
        setNewFilteredValue(substring);
    }, [substring]);
    return (

        <div className={'group'}>
            <div className={'group-title'} onClick={() => dispatch(rolledUpState(isRolled.firstGroup, 'firstGroup'))}>
                <span>1-10</span>
                {!isRolled.firstGroup ? null :
                    <> {firstFilteredGroup.map((item, id) => <Card substring={substring} dispatch={dispatch} key={id}
                        item={item}/>)}</>
                }
            </div>
            <div className={'group-title'} onClick={() => dispatch(rolledUpState(isRolled.secondGroup, 'secondGroup'))}>
                <span>11-20</span>
                {!isRolled.secondGroup ? null : <> {secondFilteredGroup.map((item, id) => <Card dispatch={dispatch}
                    key={id} item={item}/>)}
                </>}
            </div>
            <div className={'group-title'} onClick={() => dispatch(rolledUpState(isRolled.thirdGroup, 'thirdGroup'))}>
                <span>21-30</span>
                {!isRolled.thirdGroup ? null :
                    <>{thirdFilteredGroup.map((item, id) => <Card dispatch={dispatch} key={id} item={item}/>)}
                    </>}
            </div>
        </div>
    );
};