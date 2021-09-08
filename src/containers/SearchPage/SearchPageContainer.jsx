import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import { API_SEARCH } from '@constants/api';
import { getAPIRecourse } from '@utils/network';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import { debounce } from 'lodash';
import styles from './SearchPageContainer.module.css';
import UIInput from '@ui/UIInput';

const SearchPageContainer = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);
    // console.log(inputValue);

    const getResponse = async (params) => {
        // console.log(params);
        const res = await getAPIRecourse(API_SEARCH + params);
        if (res) {
            const peopleList = res.results.map(({ id, name, image }) => {
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
        getResponse('');
    }, []);

    const debouncedGetResponse = useCallback(
        debounce((value) => getResponse(value), 300),
        []
    );

    const handleChange = (value) => {
        // console.log(e.target.value);
        setInputSearchValue(value);
        debouncedGetResponse(value);
    };

    return (
        <>
            <h1 className='header__text'>Search</h1>
            <UIInput
                value={inputSearchValue}
                handleInputChange={handleChange}
                placeholder="Input character's name"
                classes={styles.input__search}
            />
            <SearchPageInfo people={people} />
        </>
    );
};

SearchPageContainer.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPageContainer);
