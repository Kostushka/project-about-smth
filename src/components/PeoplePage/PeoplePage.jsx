import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeoplePage.module.css';

const PeoplePage = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({ id, name, image }) => (
                <li className={styles.list__item} key={id}>
                    <Link to={`/people/${id}`}>
                        <img
                            className={styles.item__img}
                            src={image}
                            alt={name}
                        />
                        <p>{name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

PeoplePage.propTypes = {
    people: PropTypes.array,
};

export default PeoplePage;
