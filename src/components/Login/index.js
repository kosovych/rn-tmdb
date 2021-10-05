import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';

import Input from '../shared/Input';
import Button from '../shared/Button';
import Container from '../shared/Container';
import {loginSubmit} from '@store/auth/actions';

const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    username: '',
    password: '',
  };

  const SignUpSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = ({username, password}) => {
    dispatch(loginSubmit(username, password));
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignUpSchema}
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

export default Login;
