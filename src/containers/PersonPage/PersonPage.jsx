import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import { getAPIRecourse } from '@utils/network';
import UILoading from '@ui/UILoading';
import styles from './PersonPage.module.css';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import { useSelector } from 'react-redux';

const PersonFilms = React.lazy(() =>
    import('@components/PersonPage/PersonFilms')
);

const PersonPage = ({ match, setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const stateDate = useSelector((state) => state.favoriteReducer);

    useEffect(() => {
        (async () => {
            const id = match.params.id;
            const res = await getAPIRecourse(`${API_PERSON}/${id}`);

            setPersonFavorite(!!stateDate[id]);

            setPersonId(id);
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
                res.episode.length && setPersonFilms(res.episode);

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
                        personId={personId}
                        personName={personName}
                        personPhoto={personPhoto}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    {personFilms && (
                        <React.Suspense fallback={<UILoading />}>
                            <PersonFilms personFilms={personFilms} />
                        </React.Suspense>
                    )}
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
