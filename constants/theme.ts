import { Platform } from 'react-native';

export type ColorScheme = 'light' | 'dark';

export type AppColors = {
  background: string;
  surface: string;
  surfaceSecondary: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  textSubtle: string;
  border: string;
  borderLight: string;
  primary: string;
  primaryInverse: string;
  accent: string;
  danger: string;
  dangerBg: string;
  success: string;
  warning: string;
  tabBar: string;
  tabBarBorder: string;
  tabActive: string;
  tabInactive: string;
  inputBackground: string;
  switchTrackOff: string;
  switchTrackOn: string;
  overlay: string;
  imagePlaceholder: string;
};

export const AppTheme: Record<ColorScheme, AppColors> = {
  light: {
    background: '#F9FAFB',
    surface: '#FFFFFF',
    surfaceSecondary: '#F3F4F6',
    text: '#111827',
    textSecondary: '#374151',
    textMuted: '#6B7280',
    textSubtle: '#9CA3AF',
    border: '#E5E7EB',
    borderLight: '#F3F4F6',
    primary: '#111827',
    primaryInverse: '#FFFFFF',
    accent: '#2563EB',
    danger: '#DC2626',
    dangerBg: '#FEF2F2',
    success: '#16A34A',
    warning: '#F59E0B',
    tabBar: '#FFFFFF',
    tabBarBorder: '#E5E7EB',
    tabActive: '#111827',
    tabInactive: '#9CA3AF',
    inputBackground: '#FFFFFF',
    switchTrackOff: '#E5E7EB',
    switchTrackOn: '#111827',
    overlay: 'rgba(0, 0, 0, 0.35)',
    imagePlaceholder: '#F3F4F6',
  },
  dark: {
    background: '#0F1117',
    surface: '#1C1F26',
    surfaceSecondary: '#2A2D35',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    textMuted: '#9CA3AF',
    textSubtle: '#6B7280',
    border: '#2E3340',
    borderLight: '#252830',
    primary: '#F9FAFB',
    primaryInverse: '#111827',
    accent: '#60A5FA',
    danger: '#F87171',
    dangerBg: '#3B1C1C',
    success: '#4ADE80',
    warning: '#FBBF24',
    tabBar: '#1C1F26',
    tabBarBorder: '#2E3340',
    tabActive: '#F9FAFB',
    tabInactive: '#6B7280',
    inputBackground: '#2A2D35',
    switchTrackOff: '#374151',
    switchTrackOn: '#F9FAFB',
    overlay: 'rgba(0, 0, 0, 0.55)',
    imagePlaceholder: '#2A2D35',
  },
};

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: AppTheme.light.text,
    background: AppTheme.light.surface,
    tint: tintColorLight,
    icon: AppTheme.light.textMuted,
    tabIconDefault: AppTheme.light.textMuted,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: AppTheme.dark.text,
    background: AppTheme.dark.surface,
    tint: tintColorDark,
    icon: AppTheme.dark.textMuted,
    tabIconDefault: AppTheme.dark.textMuted,
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const THEME_STORAGE_KEY = '@app_color_scheme';
