import PropTypes from 'prop-types';

export const Item = ({item}) => {
    Item.propTypes = {
        item: PropTypes.object,
    };
    return (
        <>
            <tr draggable={true}>{item.name.first}
                {item.name.last} {item.registered.date}{item.email}</tr>
        </>
    );
};
