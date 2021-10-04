import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Switch, StyleSheet, Text} from 'react-native';
import {WHITE, DARK} from '@constants';
import {setTheme} from '@store/theme/actions';

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const themeType = useSelector(state => state.theme.type);
  const [isEnabled, setIsEnabled] = useState(themeType === WHITE);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    dispatch(setTheme(themeType === DARK ? WHITE : DARK));
  };

  return (
    <View style={styles.container}>
      <Text styles={styles.textLeft}>Dark </Text>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
      <Text styles={styles.textRight}> White</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 4,
    marginBottom: 4,
    marginRight: 8,
  },
});

export default ToggleTheme;
