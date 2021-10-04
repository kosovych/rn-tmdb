import {useSelector} from 'react-redux';

import themes from '../theme';

const useThemeColors = () => {
  const type = useSelector(state => state.theme.type);
  return themes[type];
};

export default useThemeColors;
