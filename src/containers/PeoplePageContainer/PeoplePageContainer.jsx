import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helper/withErrorApi';
import PeoplePage from '@components/PeoplePage/PeoplePage';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { useQueryParams } from '@hook/useQueryParams';
import { getAPIRecourse } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeoplePageId } from '@services/getPeopleData';
import { withRouter } from 'react-router';
import { PEOPLE_DATA } from '../../constants/api';
// import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
// import styles from './PeoplePageContainer.module.css';

const PeoplePageContainer = ({ setErrorApi, ...props }) => {
    // console.log(props.history.location.search);
    // let pageId = props.history.location.search;
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');
    // console.log(queryPage);

    const getRecourse = async (url) => {
        const response = await getAPIRecourse(url);
        // console.log(response);
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
            setPrevPage(response.info.prev);
            setNextPage(response.info.next);
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getRecourse(API_PEOPLE + queryPage);
        // getRecourse(PEOPLE_DATA + pageId);
    }, []);

    return (
        <>
            <PeopleNavigation
                getRecourse={getRecourse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeoplePage people={people} />}
        </>
    );
};

PeoplePageContainer.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePageContainer);
