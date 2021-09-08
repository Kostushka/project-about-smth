import PropTypes from 'prop-types';
import cn from 'classnames';
import '../index.css';
import closeSvg from './img/close.svg';
import styles from './UIInput.module.css';

const UIInput = ({ value, handleInputChange, placeholder, classes }) => {
    return (
        <div className={cn(styles.wrapper__input, classes)}>
            <input
                type='text'
                value={value}
                onChange={(e) => {
                    handleInputChange(e.target.value);
                }}
                placeholder={placeholder}
                className={styles.input}
            />
            <img
                className={cn(styles.close, !value && styles.close__disabled)}
                onClick={(e) => {
                    value && handleInputChange('');
                }}
                src={closeSvg}
                alt='closeButton'
            />
        </div>
    );
};

UIInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
};

export default UIInput;
