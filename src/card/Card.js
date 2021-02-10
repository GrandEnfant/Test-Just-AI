import PropTypes from 'prop-types';
import './style.css'
import {addFavorites} from "../redux/actions";
import {useSelector, useDispatch} from 'react-redux';

export const Card = ({item, dispatch}) => {
    Card.propTypes = {
        item: PropTypes.object,
    };
    const favorites = useSelector((state) => state.favorites);

    const handlerDragStart = (evt, item) => {
    };

    const handlerDragEnd = (evt, card) => {
        evt.preventDefault();
        console.log(card);
        dispatch(addFavorites(card));
        console.log(favorites);
        console.log('fav');
        console.log('drop')

    };

    return (
            <div className={'userCard'}
                draggable={true}
                onDragStart = {(evt) => handlerDragStart(evt, item)}
                onDragEnd = {(evt) => handlerDragEnd(evt, item)}
            >
                <div className={"col1"}><div className={'userPic'}><img src={item.picture.thumbnail} /></div></div>
                <div className={'col2'}>
                <div className={'userName'}>{item.name.first}
                    {item.name.last} {item.registered.date}</div>
                <div className={'userEmail'}> {item.email}</div></div>
            </div>

    );
};
