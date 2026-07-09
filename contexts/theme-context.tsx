import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

import {
  AppTheme,
  THEME_STORAGE_KEY,
  type AppColors,
  type ColorScheme,
} from '@/constants/theme';

type ThemeContextValue = {
  colorScheme: ColorScheme;
  colors: AppColors;
  isDark: boolean;
  isReady: boolean;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useSystemColorScheme();
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>('light');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY).then((stored) => {
      if (stored === 'light' || stored === 'dark') {
        setColorSchemeState(stored);
      } else {
        setColorSchemeState(systemScheme === 'dark' ? 'dark' : 'light');
      }
      setIsReady(true);
    });
  }, [systemScheme]);

  const setColorScheme = useCallback((scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    AsyncStorage.setItem(THEME_STORAGE_KEY, scheme);
  }, []);

  const toggleColorScheme = useCallback(() => {
    setColorSchemeState((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      AsyncStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      colorScheme,
      colors: AppTheme[colorScheme],
      isDark: colorScheme === 'dark',
      isReady,
      setColorScheme,
      toggleColorScheme,
    }),
    [colorScheme, isReady, setColorScheme, toggleColorScheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
