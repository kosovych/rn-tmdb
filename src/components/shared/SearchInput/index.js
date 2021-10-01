import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8,
    padding: 4,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#2E8BC0',
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 20,
    height: 20,
    marginLeft: 6,
  },
  close: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  input: {
    flexGrow: 1,
    padding: 4,
    fontSize: 16,
  },
  errorInput: {
    borderColor: '#dd1f00',
  },
});

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
    <View style={styles.wrapper}>
      <View style={styles.inner}>
        <Image
          style={styles.img}
          source={require('../../../../public/images/search.png')}
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
              source={require('../../../../public/images/close.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
