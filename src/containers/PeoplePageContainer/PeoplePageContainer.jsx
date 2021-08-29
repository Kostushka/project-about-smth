import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helper/withErrorApi';
import PeoplePage from '@components/PeoplePage/PeoplePage';
import { getAPIRecourse } from '@utils/network';
// import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
// import styles from './PeoplePageContainer.module.css';

const PeoplePageContainer = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const getRecourse = async () => {
        const response = await getAPIRecourse();
        if (response) {
            const peopleList = response.results.map(({ id, name, image }) => {
                // const peopleId = getPeopleId(url);
                // const img = getPeopleImg(peopleId);
                // console.log(img);
                return {
                    id,
                    name,
                    image,
                };
            });
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getRecourse();
    }, []);

    return (
        <>
            <h2 className='header__text'>Navigation</h2>
            {people && <PeoplePage people={people} />}
        </>
    );
};

PeoplePageContainer.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePageContainer);
