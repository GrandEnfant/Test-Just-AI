import './style.css';
import {addFavorites, deleteCard} from '../redux/actions';
import {DataType} from '../redux/types';
import {useDispatch} from 'react-redux';
import trash from './trash.png';

interface Props {
    item: DataType,
    substring?: string,
    remove?: boolean,
}
const Card = ({item, substring, remove = false}: Props) => {
    const dispatch = useDispatch();
    const handlerDragEnd = (evt: any, card: DataType) => {
        evt.preventDefault();
        dispatch(addFavorites(card));
    };
    function highlight(filter: string | undefined, str: string) {
        if (!filter) return str;
        const regexp = new RegExp(filter, 'ig');
        const matchValue = str.match(regexp);

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
    const handleClickDelete = (evt: any, card: DataType) => {
        evt.preventDefault();
        dispatch(deleteCard(card));
    };

    return (
        <div className={'userCard'}
            draggable={true}
            onDragEnd = {(evt) => handlerDragEnd(evt, item)}>
            <div className={'col1'}><div className={'userPic'}><img alt={'userpic'} src={item.picture.thumbnail}/></div></div>
            <div className={'col2'}>
                <div className={'userName'}> {highlight(substring, item.name.first)}
                    {item.name.last} {item.registered.date}</div>
                <div className={'userEmail'}> {item.email}</div></div>
            {remove &&
            <div onClick={(evt) => handleClickDelete(evt, item)} className={'trash'}><img alt={'trash'} className={'trash'} src={trash}/> </div>
            }
        </div>
    );
};

export default Card;