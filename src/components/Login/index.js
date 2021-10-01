import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';

import Input from '../shared/Input';
import Button from '../shared/Button';
import Container from '../shared/Container';
import {
  loginSubmit as loginAction,
  setSessionId as setSessionIdAction,
} from '@store/auth/actions';

const Login = ({loginSubmit}) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const SignupSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async ({username, password}) => {
    loginSubmit(username, password);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignupSchema}
      >
        {({handleBlur, handleChange, values, handleSubmit, getFieldMeta}) => (
          <>
            <Input
              name="username"
              label="Login:"
              value={values.username}
              onBlur={handleBlur('username')}
              onChangeText={handleChange('username')}
              fieldMeta={getFieldMeta('username')}
            />
            <Input
              name="password"
              label="Password:"
              value={values.password}
              secureTextEntry={true}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              fieldMeta={getFieldMeta('password')}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Container>
  );
};

const mapDispatchToProps = {
  loginSubmit: loginAction,
  setSessionId: setSessionIdAction,
};

export default connect(null, mapDispatchToProps)(Login);
