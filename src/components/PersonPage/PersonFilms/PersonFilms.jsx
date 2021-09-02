import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { makeConcurrentRequest } from '@utils/network';
import styles from './PersonFilms.module.css';

const PersonFilms = ({ personFilms }) => {
    const [filmName, setFilmName] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await makeConcurrentRequest(personFilms);
            // console.log(res);
            setFilmName(res);
        })();
    }, []);
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmName
                    .sort((a, z) => a.id - z.id)
                    .map(({ name, id }) => (
                        <li className={styles.list__item} key={id}>
                            <span className={styles.item__episode}>
                                Episode {id}
                            </span>
                            <span className={styles.item__colomn}>: </span>
                            <span className={styles.item__title}>{name}</span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

PersonFilms.propTypes = {
    personFilms: PropTypes.array,
};

export default PersonFilms;
