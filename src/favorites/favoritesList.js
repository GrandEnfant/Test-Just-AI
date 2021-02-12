import './style.css';
import {FavoritesCard} from '../favoriteCard/favoriteCard';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

export const FavoritesList = ({dispatch}) => {
    FavoritesList.propTypes = {
        dispatch: PropTypes.func,
    };


    const favorites = useSelector((state) => state.favorites);
    const handlerDragOver = (evt) => {
        evt.preventDefault();
        evt.target.style.background = '#ffffdc';
    };
    const handlerDragLeave = (evt) => {
        evt.preventDefault();
        evt.target.style.background = 'none';

    };
    const handlerDrop = (evt) => {
        evt.preventDefault();
        evt.target.style.background = 'none';
    };

    return (
        <div className={'favorites'}
            onDragOver={(evt) => handlerDragOver(evt)}
            onDragLeave = {(evt) => handlerDragLeave(evt)}
            onDrop={(evt) => handlerDrop(evt)}
        > <span>Избранные</span>
            {!favorites? null :
                <div className={'favorites'}>
                    {favorites.map((item, idx) => <FavoritesCard key={idx} dispatch={dispatch} item={item}/>)}
                </div>}
        </div>
    );
};


