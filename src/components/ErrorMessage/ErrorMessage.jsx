import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                Упс... Ошибка!
                <br />
                Попробуйте зайти на сайт немного позже или займитесь другим
                приятным делом;)
            </p>
        </>
    );
};

export default ErrorMessage;
