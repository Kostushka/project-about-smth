import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeoplePage from '../../components/PeoplePage/PeoplePage';
import styles from './FavoritesPageContainer.module.css';

const FavoritesPageContainer = () => {
    const [people, setPeople] = useState([]);
    const stateDate = useSelector((state) => state.favoriteReducer);
    useEffect(() => {
        const arr = Object.entries(stateDate);
        const res = arr.map((item) => {
            return {
                id: item[0],
                image: item[1].img,
                name: item[1].name,
            };
        });
        setPeople(res);
    }, []);

    return (
        <>
            <h1 className='header__text'>FavoritePage</h1>
            {people.length ? (
                <PeoplePage people={people} />
            ) : (
                <h2 className={styles.comment}>No data</h2>
            )}
        </>
    );
};

export default FavoritesPageContainer;
