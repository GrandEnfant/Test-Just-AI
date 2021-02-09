import {Item} from './Item';
import {rolledUpState} from './redux/actions';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {Group} from "./Group";

export const Header = ({data, isRolled, dispatch,}) => {

    Header.propTypes = {
        data: PropTypes.object,
        isRolled: PropTypes.object,
        dispatch: PropTypes.func,
    };



    const [substring, setSubstring] = useState('');
    const startSearchSubstring = (evt) => {
        setSubstring(evt.target.value);
        // setFirstFilteredGroup(searchSubstring(first_group, substring));
        // setSecondFilteredGroup(searchSubstring(second_group, substring));
        // setThirdFilteredGroup(searchSubstring(third_group, substring));
    };



    return (
            <div>
                 <div><input type={'text'} value={substring} onChange={startSearchSubstring}/></div>
                 <div>Избранные</div>
                    <Group data={data} dispatch={dispatch} isRolled={isRolled} substring={substring}/>
            </div>
    );
};