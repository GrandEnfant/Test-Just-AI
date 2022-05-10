import React from 'react';
import {useSelector} from 'react-redux';
import {DataType} from '../redux/types';
import FavoritesCard from '../favoriteCard';
import './style.css';

const FavouritesList = () => {
    interface Favourites {
     favourites: Array<DataType>,
 }
    const favourites = useSelector((state: Favourites) => state.favourites);


    return (
        <div className={'favorites'}

        >
            {favourites &&
                <div className={'favourites'}>
                    {favourites.map((item) => <FavoritesCard key={item.id.value} item={item}/>)}
                </div>}
        </div>
    );
};

export default FavouritesList;