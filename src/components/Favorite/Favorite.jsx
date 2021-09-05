import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './Favorite.module.css';
import icon from './img/favorite.svg';

const Favorite = () => {
    const [count, setCount] = useState(null);
    const stateDate = useSelector((state) => state.favoriteReducer);
    useEffect(() => {
        const length = Object.keys(stateDate).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
    });
    return (
        <div className={styles.container}>
            <Link to='/favorites'>
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt='Favorites' />
            </Link>
        </div>
    );
};

export default Favorite;
