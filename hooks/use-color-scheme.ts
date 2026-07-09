import { useTheme } from '@/contexts/theme-context';

export function useColorScheme() {
  const { colorScheme, isReady } = useTheme();
  return isReady ? colorScheme : 'light';
}
