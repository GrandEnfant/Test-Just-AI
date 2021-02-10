import './style.css'
import {Card} from "../card/Card";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';

export const FavoritesColumn = () => {
    const favorites = useSelector((state) => state.favorites);
    const handlerDragOver = (evt) => {
        evt.preventDefault();
        evt.target.style.background = 'yellow'
    };
    const handlerDragLeave = (evt) => {
        evt.preventDefault();
        evt.target.style.background = 'none'

    };
    const handlerDrop = (evt) => {
        evt.preventDefault();
        evt.target.style.background = 'none'
    };

    return (
        <div className={"col2"}
             onDragOver={(evt) => handlerDragOver(evt)}
             onDragLeave = {(evt) => handlerDragLeave(evt)}
             onDrop={(evt) => handlerDrop(evt)}
        > Избранные
            {!favorites? null :
            <div className={'favorites'}>
                {favorites.map(item => <Card item={item}/>)}

            </div>}
        </div>
    )
}


