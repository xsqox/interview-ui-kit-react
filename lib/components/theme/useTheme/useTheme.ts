import { useEffect, useState, useCallback } from 'react';
import { mapValues, values } from 'lodash';

import {
  saveToLocalStorage,
  getFromLocalStorage,
} from '../../../utils/storage';
import { ITheme } from '../types';

export const useTheme = () => {
  const themes = getFromLocalStorage('all-themes');
  const [theme, setTheme] = useState<ITheme>(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = useCallback(
    (mode: ITheme) => {
      saveToLocalStorage('theme', mode);
      setTheme(mode);
    },
    [setTheme],
  );

  const getFonts = useCallback(() => {
    const allFonts = values(mapValues(themes.data, 'font'));
    return allFonts;
  }, [themes.data]);

  useEffect(() => {
    const localTheme = getFromLocalStorage('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setTheme: setMode, getFonts };
};
