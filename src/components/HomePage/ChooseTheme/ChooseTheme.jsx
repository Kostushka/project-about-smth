import PropTypes from 'prop-types';
import cn from 'classnames';
import {
    THEME_DARK,
    THEME_LIGHT,
    THEME_NEITRAL,
    useTheme,
} from '@context/ThemeProvider';

import imgLightTheme from './img/food.jpg';
import imgDarkTheme from './img/space.jpg';
import imgNeitralTheme from './img/time.jpg';

import styles from './ChooseTheme.module.css';

export const ChooseThemeItem = ({ theme, text, img, classes }) => {
    const isTheme = useTheme();

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={() => {
                isTheme.change(theme);
            }}
        >
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__list} src={img} alt={text} />
        </div>
    );
};

ChooseThemeItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
};

const ChooseTheme = () => {
    const theme = [
        {
            theme: THEME_LIGHT,
            img: imgLightTheme,
            text: 'Light Theme',
            classes: styles.item__light,
        },
        {
            theme: THEME_DARK,
            img: imgDarkTheme,
            text: 'Dark Theme',
            classes: styles.item__dark,
        },
        {
            theme: THEME_NEITRAL,
            img: imgNeitralTheme,
            text: 'Neitral Theme',
            classes: styles.item__neitral,
        },
    ];
    return (
        <div className={styles.container}>
            {theme.map((item, index) => (
                <ChooseThemeItem
                    key={index}
                    theme={item.theme}
                    img={item.img}
                    text={item.text}
                    classes={item.classes}
                />
            ))}
        </div>
    );
};

export default ChooseTheme;
