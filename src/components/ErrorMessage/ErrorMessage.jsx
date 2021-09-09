import UIVideo from '@ui/UIVideo';
import videoError from './video/error.mp4';
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
            <UIVideo
                src={videoError}
                classes={styles.video}
                playbackRate={1.0}
            />
        </>
    );
};

export default ErrorMessage;
