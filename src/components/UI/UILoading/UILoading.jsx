import PropTypes from 'prop-types';
import PreloaderGold from './img/PreloaderGold.svg';
import PreloaderWhite from './img/PreloaderWhite.svg';
import PreloaderBlue from './img/PreloaderBlue.svg';
import cn from 'classnames';
import styles from './UILoading.module.css';
import { useEffect, useState } from 'react';

const UILoading = ({ theme = 'gold', isShadow = true, classes }) => {
    const [loaderIcon, setLoaderIcon] = useState(null);
    useEffect(() => {
        switch (theme) {
            case 'gold':
                setLoaderIcon(PreloaderGold);
                break;
            case 'white':
                setLoaderIcon(PreloaderWhite);
                break;
            case 'blue':
                setLoaderIcon(PreloaderBlue);
                break;
            default:
                setLoaderIcon(PreloaderGold);
        }
    }, []);
    return (
        <img
            className={cn(styles.loader, isShadow && styles.shadow, classes)}
            src={loaderIcon}
            alt='Loading'
        />
    );
};

UILoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
};

export default UILoading;
