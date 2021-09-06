import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import imgAlien from './img/alien.svg';
import imgClock from './img/clock.svg';
import imgHamburger from './img/hamburger.svg';
import Favorite from '../Favorite/Favorite';
import {
    THEME_DARK,
    THEME_LIGHT,
    THEME_NEITRAL,
    useTheme,
} from '@context/ThemeProvider';
import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(imgHamburger);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(imgHamburger);
                break;
            case THEME_DARK:
                setIcon(imgAlien);
                break;
            case THEME_NEITRAL:
                setIcon(imgClock);
                break;

            default:
                setIcon(imgHamburger);
        }
    }, [isTheme]);

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt='Rick and Morty' />

            <ul className={styles.list__container}>
                <li>
                    <NavLink to='/' exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/people/?page=1'>People</NavLink>
                </li>
                <li>
                    <NavLink to='/not-found' exact>
                        Not Found
                    </NavLink>
                </li>
            </ul>
            <Favorite />
        </div>
    );
};

export default Header;
