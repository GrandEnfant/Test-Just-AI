import './style.css';
import {addFavorites} from '../redux/actions';
import trash from './trash.png';
import {deleteCard} from '../redux/actions';
import {DataType} from '../redux/types';
import {useDispatch} from 'react-redux';

interface Props {
    item: DataType,
}

const FavoritesCard = ({item}: Props) => {
    const dispatch: any = useDispatch();

    const handlerDragEnd = (evt: any, card: DataType) => {
        evt.preventDefault();
        dispatch(addFavorites(card));
    };

    const handleClickDelete = (evt: any, card: DataType) => {
        evt.preventDefault();
        dispatch(deleteCard(card));
    };
    console.log(item, 'id');
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

export default FavoritesCard;