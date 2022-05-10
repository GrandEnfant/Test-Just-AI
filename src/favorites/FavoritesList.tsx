import React from 'react';
import {useSelector} from 'react-redux';
import {DataType} from '../redux/types';
import './style.css';
import Card from '../card';

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
                    {favourites.map((item) => <Card key={item.id.value} item={item} remove={true}/>)}
                </div>}
        </div>
    );
};

export default FavouritesList;