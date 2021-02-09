import {rolledUpState} from "./redux/actions";
import {Item} from "./Item";
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const Group = ({data, dispatch, isRolled, substring}) => {
    Group.propTypes = {
        data: PropTypes.object,
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
        setNewFilteredValue(substring)
    }, [substring]);
    return (
       <div>
           <div>
               <div onClick={() => dispatch(rolledUpState(isRolled.firstGroup, 'firstGroup'))}>1-10
                   {!isRolled.firstGroup ? null :
                       <> {firstFilteredGroup.map((item, id) => <Item key={id} item={item}/>)}</>
                   }
               </div>
               <div onClick={() => dispatch(rolledUpState(isRolled.secondGroup, 'secondGroup'))}>11-20
                   {!isRolled.secondGroup ? null : <> {secondFilteredGroup.map((item, id) => <Item key={id} item={item}/>)}
                   </>}
               </div>
               <div onClick={() => dispatch(rolledUpState(isRolled.thirdGroup, 'thirdGroup'))}>21-30
                   {!isRolled.thirdGroup ? null :
                       <>{thirdFilteredGroup.map((item, id) => <Item key={id} item={item}/>)}
                       </>}

               </div>
           </div>
       </div>
    )
};