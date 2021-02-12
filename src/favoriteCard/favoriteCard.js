import PropTypes from 'prop-types';
import './style.css';
import {addFavorites} from '../redux/actions';
import trash from '../trash.png';
import {deleteCard} from '../redux/actions';

export const FavoritesCard = ({item, dispatch}) => {

    FavoritesCard.propTypes = {
        item: PropTypes.object,
        dispatch: PropTypes.func
    };

    const handlerDragEnd = (evt, card) => {
        evt.preventDefault();
        dispatch(addFavorites(card));
    };

    const handleClickDelete = (evt, card) => {
        evt.preventDefault();
        dispatch(deleteCard(card));
    };

    return (
        <div className={'userCard'}
            draggable={true}
            onDragEnd = {(evt) => handlerDragEnd(evt, item)}
        >
            <div className={'col1'}><div className={'userPic'}><img alt={'userpic'} src={item.picture.thumbnail} /></div></div>
            <div className={'col2'}>
                <div className={'userName'}>{item.name.first}
                    {item.name.last} {item.registered.date}</div>
                <div className={'userEmail'}> {item.email}</div></div>

            <div onClick={(evt) => handleClickDelete(evt, item)} className={'trash'}><img alt={'trash'} className={'trash'} src={trash}/> </div>
        </div>
    );
};
