// import styles from './HomePageContainer.module.css';

import ChooseTheme from '@components/HomePage/ChooseTheme';

const HomePageContainer = () => {
    return (
        <>
            <h1 className='header__text'>Home page</h1>
            <ChooseTheme />
        </>
    );
};

export default HomePageContainer;
