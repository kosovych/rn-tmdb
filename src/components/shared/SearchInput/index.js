import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Image} from 'react-native';

import Styles from './styles';

const Input = ({placeholder, name, handleSubmit, setValues, onClear}) => {
  const [value, setValue] = useState('');
  const handleTextChange = searchValue => {
    setValue(() => {
      setValues({[name]: searchValue});
      return searchValue;
    });
  };
  const clearHandler = () => {
    setValue(() => {
      setValues({[name]: ''});
      return '';
    });
    onClear();
    handleSubmit();
  };

  return (
    <View style={Styles.wrapper}>
      <View style={Styles.inner}>
        <Image
          style={Styles.img}
          source={require('@public/images/search.png')}
        />
        <TextInput
          style={Styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
          onSubmitEditing={handleSubmit}
        />
        {Boolean(value) && (
          <TouchableOpacity onPress={clearHandler}>
            <Image
              style={Styles.close}
              source={require('@public/images/close.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
