import './style.css';
import {useSelector} from 'react-redux';
import React from 'react';
import {DataType} from '../redux/types';
import FavoritesCard from '../favoriteCard';

const FavouritesList = () => {
    interface Favourites {
     favourites: Array<DataType>,
 }
    const favourites = useSelector((state: Favourites) => state.favourites);
    const handlerDragOver = (evt: any) => {
        evt.preventDefault();
        evt.target.style.background = '#ffffdc';
    };
    const handlerDragLeave = (evt: any) => {
        evt.preventDefault();
        evt.target.style.background = 'none';
    };
    const handlerDrop = (evt: any) => {
        evt.preventDefault();
        evt.target.style.background = 'none';
    };

    return (
        <div className={'favorites'}
            onDragOver={(evt) => handlerDragOver(evt)}
            onDragLeave = {(evt) => handlerDragLeave(evt)}
            onDrop={(evt) => handlerDrop(evt)}
        > <span>Избранные</span>
            {favourites &&
                <div className={'favourites'}>
                    {favourites.map((item) => <FavoritesCard key={item.id.value} item={item}/>)}
                </div>}
        </div>
    );
};

export default FavouritesList;