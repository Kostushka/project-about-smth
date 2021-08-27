import styles from './PeoplePage.module.css';

const PeoplePage = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({ id, name, image }) => (
                <li className={styles.list__item} key={id}>
                    <a href='#'>
                        <img
                            className={styles.item__img}
                            src={image}
                            alt={name}
                        />
                        <p>{name}</p>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default PeoplePage;
