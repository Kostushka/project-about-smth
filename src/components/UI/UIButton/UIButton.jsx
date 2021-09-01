import PropTypes from 'prop-types';
import cn from 'classnames';
import '../index.css';
import styles from './UIButton.module.css';

const UIButton = ({
    text,
    handleChange,
    disabled,
    theme = 'light',
    classes,
}) => {
    return (
        <button
            onClick={handleChange}
            disabled={disabled}
            className={cn(styles.button, styles[theme], classes)}
        >
            {text}
        </button>
    );
};

UIButton.propTypes = {
    text: PropTypes.string,
    handleChange: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string,
};

export default UIButton;
