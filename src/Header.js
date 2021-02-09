import {Item} from './Item';
import {rolledUpState} from './redux/actions';
import {useState} from 'react';
import PropTypes from 'prop-types';

export const Header = ({data, isRolled, dispatch,}) => {

    Header.propTypes = {
        data: PropTypes.object,
        isRolled: PropTypes.object,
        dispatch: PropTypes.func,
    };

    const first_group = data.filter(item => item.registered.age <= 10);
    const second_group = data.filter(item => item.registered.age <= 20 && item.registered.age > 10);
    const third_group = data.filter(item => item.registered.age <= 30 && item.registered.age > 20);

    const [firstFilteredGroup, setFirstFilteredGroup] = useState(first_group);
    const [secondFilteredGroup, setSecondFilteredGroup] = useState(second_group);
    const [thirdFilteredGroup, setThirdFilteredGroup] = useState(third_group);


    const [substring, setSubstring] = useState('');
    const startSearchSubstring = (evt) => {
        setSubstring(evt.target.value);
        setFirstFilteredGroup(searchSubstring(first_group, substring));
        setSecondFilteredGroup(searchSubstring(second_group, substring));
        setThirdFilteredGroup(searchSubstring(third_group, substring));
    };

    const searchSubstring = (group, substring) => {
        const filteredGroup = group.filter(item => item.name.first.includes(substring));
        return filteredGroup;
    };

    return (
        <table>
            <tbody>
                <thead>
                    <tr>
                        <th><input type={'text'} value={substring} onChange={startSearchSubstring}/></th>
                        <th>Избранные</th>
                    </tr>
                    <tr>
                        <td onClick={() => dispatch(rolledUpState(isRolled.firstGroup, 'firstGroup'))}>1-10</td>
                        <td onClick={() => dispatch(rolledUpState(isRolled.secondGroup, 'secondGroup'))}>11-20</td>
                        <td onClick={() => dispatch(rolledUpState(isRolled.thirdGroup, 'thirdGroup'))}>21-30</td>
                    </tr>
                    <tr>
                        <td> {!isRolled.firstGroup ? null :
                            <> {firstFilteredGroup.map((item, id) => <Item key={id} item={item}/>)}</>
                        }</td>
                        {!isRolled.secondGroup ? null : <> {secondFilteredGroup.map((item, id) => <Item key={id} item={item}/>)}
                        </>}
                        {!isRolled.thirdGroup ? null :
                            <>{thirdFilteredGroup.map((item, id) => <Item key={id} item={item}/>)}
                            </>}
                    </tr>
                </thead>
            </tbody>
        </table>
    );
};