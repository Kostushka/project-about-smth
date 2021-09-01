import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ personPhoto, personName }) => {
    return (
        <div className={styles.container}>
            <img
                className={styles.person__photo}
                src={personPhoto}
                alt={personName}
            />
        </div>
    );
};

PersonPhoto.propTypes = {
    personName: PropTypes.string,
    personPhoto: PropTypes.string,
};

export default PersonPhoto;
