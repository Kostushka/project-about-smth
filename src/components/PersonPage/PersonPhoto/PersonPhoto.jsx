import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite } from '@store/actions';
import { removePersonFromFavorite } from '@store/actions';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({
    personId,
    personName,
    personPhoto,
    personFavorite,
    setPersonFavorite,
}) => {
    const dispatch = useDispatch();

    const dispatchFavoritePerson = (e) => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(
                setPersonToFavorite({
                    [personId]: {
                        name: personName,
                        img: personPhoto,
                    },
                })
            );
            setPersonFavorite(true);
        }
    };
    return (
        <div className={styles.container}>
            <img
                className={styles.person__photo}
                src={personPhoto}
                alt={personName}
            />

            <img
                className={styles.favorite}
                onClick={dispatchFavoritePerson}
                src={personFavorite ? iconFavoriteFill : iconFavorite}
                alt='Add favorite person'
            />
        </div>
    );
};

PersonPhoto.propTypes = {
    personName: PropTypes.string,
    personPhoto: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
