import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import { getAPIRecourse } from '@utils/network';
import styles from './PersonPage.module.css';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

const PersonPage = ({ match, setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    useEffect(() => {
        (async () => {
            const id = match.params.id;
            const res = await getAPIRecourse(`${API_PERSON}/${id}`);
            // console.log(res);
            if (res) {
                setPersonInfo([
                    { title: 'Gender', data: res.gender },
                    { title: 'Location name', data: res.location.name },
                    { title: 'Origin name', data: res.origin.name },
                    { title: 'Species', data: res.species },
                    { title: 'Status', data: res.status },
                ]);

                setPersonName(res.name);

                setPersonPhoto(res.image);

                // res.episode;

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, []);

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                </div>
            </div>
        </>
    );
};

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);