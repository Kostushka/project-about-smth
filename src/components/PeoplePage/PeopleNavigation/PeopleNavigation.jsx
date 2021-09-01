import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UIButton from '@ui/UIButton';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ getRecourse, prevPage, nextPage, counterPage }) => {
    const handleChangePrev = () => {
        getRecourse(prevPage);
    };
    const handleChangeNext = () => {
        getRecourse(nextPage);
    };
    return (
        <div className={styles.container}>
            <Link to={`?page=${counterPage - 1}`} className={styles.link}>
                <UIButton
                    text='Prev'
                    handleChange={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`?page=${counterPage + 1}`} className={styles.link}>
                <UIButton
                    text='Next'
                    handleChange={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    );
};

PeopleNavigation.propTypes = {
    getRecourse: PropTypes.func,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    counterPage: PropTypes.number,
};

export default PeopleNavigation;
