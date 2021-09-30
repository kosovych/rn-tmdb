import React from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';

import SearchInput from '@shared/SearchInput';

const Search = ({setSearch, getMovies}) => {
  const initialValues = {
    search: '',
  };

  const onSubmit = ({search}) => {
    setSearch(search);
    getMovies();
  };

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({
          handleBlur,
          handleChange,
          values,
          handleSubmit,
          getFieldMeta,
          setValues,
          resetForm,
        }) => (
          <>
            <SearchInput
              name="search"
              placeholder="Search:"
              value={values.search}
              onBlur={handleBlur('search')}
              onChangeText={handleChange('search')}
              fieldMeta={getFieldMeta('search')}
              handleSubmit={handleSubmit}
              setValues={setValues}
              onClear={resetForm}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Search;
