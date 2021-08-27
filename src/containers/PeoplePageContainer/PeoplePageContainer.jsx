import { useEffect, useState } from 'react';
import PeoplePage from '../../components/PeoplePage/PeoplePage';
// import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import { getAPIRecourse } from '../../utils/network';
// import styles from './PeoplePageCantainer.module.css';

const PeoplePageContainer = () => {
    const [people, setPeople] = useState(null);
    const getRecourse = async () => {
        const response = await getAPIRecourse();
        const peopleList = response.results.map(({ id, name, image }) => {
            // const peopleId = getPeopleId(url);
            // const img = getPeopleImg(id);
            // console.log(img);
            return {
                id,
                name,
                image,
            };
        });

        setPeople(peopleList);
    };

    useEffect(() => {
        getRecourse();
    }, []);

    return <>{people && <PeoplePage people={people} />}</>;
};

export default PeoplePageContainer;
