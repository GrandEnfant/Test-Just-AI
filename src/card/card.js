import PropTypes from 'prop-types';
import './style.css';
import {addFavorites} from '../redux/actions';

export const Card = ({item, dispatch, substring}) => {
    Card.propTypes = {
        item: PropTypes.object,
        dispatch: PropTypes.func,
        substring: PropTypes.string
    };

    const handlerDragEnd = (evt, card) => {
        evt.preventDefault();
        dispatch(addFavorites(card));
    };
    function highlight(filter, str) {
        if (!filter) return str;
        const regexp = new RegExp(filter, 'ig');
        const matchValue = str.match(regexp);
        console.log('filter', filter);

        console.log('str', str);
        console.log('matchValue', matchValue);
        if (matchValue) {
            return str.split(regexp).map((s, index, array) => {
                if (index < array.length - 1) {
                    const c = matchValue.shift();
                    return <>{s}<span className={'highlight'}>{c}</span></>;
                }
                return s;
            });
        }
        return str;
    }

    return (
        <div className={'userCard'}
            draggable={true}
            onDragEnd = {(evt) => handlerDragEnd(evt, item)}>
            <div className={'col1'}><div className={'userPic'}><img alt={'userpic'} src={item.picture.thumbnail}/></div></div>
            <div className={'col2'}>
                <div className={'userName'}> {highlight(substring, item.name.first)}
                    {item.name.last} {item.registered.date}</div>
                <div className={'userEmail'}> {item.email}</div></div>
        </div>
    );
};
