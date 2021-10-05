import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Image} from 'react-native';

import useThemeColors from '@hooks/useThemeColors';

import createStyles from './styles';

const Input = ({placeholder, name, handleSubmit, setValues, onClear}) => {
  const colors = useThemeColors();
  const styles = createStyles(colors);

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
    <View style={styles.wrapper}>
      <View style={styles.inner}>
        <Image
          style={styles.img}
          source={require('@public/images/search.png')}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
          onSubmitEditing={handleSubmit}
        />
        {Boolean(value) && (
          <TouchableOpacity onPress={clearHandler}>
            <Image
              style={styles.close}
              source={require('@public/images/close.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
