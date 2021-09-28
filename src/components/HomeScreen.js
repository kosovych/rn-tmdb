import React, { useState } from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import axios from '../axios';
import {AUTH_TOKEN, VALIDATE_TOKEN_WITH_LOGIN, NEW_SESSION} from '../constants';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    login: '',
    password: '',
  };

  const SignupSchema = Yup.object().shape({
    login: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values, form) => {
    try {
      setLoading(true);
      const requestTokenResponse = await axios.get(AUTH_TOKEN);
      const requestToken = requestTokenResponse.data.request_token;
      const sessionRequestTokenResponse = await axios.post(
        VALIDATE_TOKEN_WITH_LOGIN,
        {
          request_token: requestToken,
          username: values.login,
          password: values.password,
        },
      );
      const sessionRequestToken = sessionRequestTokenResponse.data.request_token;

      const sessionIdResponse = await axios.post(NEW_SESSION, {
        request_token: sessionRequestToken,
      });
      const sessionId = sessionIdResponse.data.session_id;
      console.log(sessionId);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}
    >
      {({handleBlur, handleChange, values, handleSubmit, getFieldMeta}) => (
        <>
          <Input
            name="login"
            label="Login:"
            value={values.login}
            onBlur={handleBlur('login')}
            onChangeText={handleChange('login')}
            fieldMeta={getFieldMeta('login')}
          />
          <Input
            name="password"
            label="Password:"
            value={values.password}
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            fieldMeta={getFieldMeta('password')}
          />
          <Button title="Submit" onPress={handleSubmit} loading={loading} />
        </>
      )}
    </Formik>
  );
};
export default HomeScreen;
