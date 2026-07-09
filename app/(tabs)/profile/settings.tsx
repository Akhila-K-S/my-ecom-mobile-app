import { Pressable, Switch, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

const SETTINGS_OPTIONS = [
  { id: 'language', label: 'Language', type: 'link' as const, value: 'English' },
  { id: 'currency', label: 'Currency', type: 'link' as const, value: 'USD ($)' },
  { id: 'country', label: 'Country', type: 'link' as const, value: 'United States' },
];

export default function SettingsScreen() {
  const { isDark, toggleColorScheme, colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    card: {
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      marginBottom: 16,
      overflow: 'hidden',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
    },
    label: { fontSize: 15, color: c.text },
    rowRight: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    value: { fontSize: 14, color: c.textSubtle },
    divider: { height: 1, backgroundColor: c.borderLight, marginLeft: 16 },
  }));

  return (
    <ProfileScreenLayout title="Settings">
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Dark mode</Text>
          <Switch
            value={isDark}
            onValueChange={toggleColorScheme}
            trackColor={{ false: colors.switchTrackOff, true: colors.switchTrackOn }}
            thumbColor={colors.primaryInverse}
          />
        </View>
        <View style={styles.divider} />
        {SETTINGS_OPTIONS.map((option, index) => (
          <View key={option.id}>
            <Pressable style={styles.row}>
              <Text style={styles.label}>{option.label}</Text>
              <View style={styles.rowRight}>
                <Text style={styles.value}>{option.value}</Text>
                <Ionicons name="chevron-forward" size={16} color={colors.textSubtle} />
              </View>
            </Pressable>
            {index < SETTINGS_OPTIONS.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Pressable style={styles.row}>
          <Text style={styles.label}>Change password</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.textSubtle} />
        </Pressable>
        <View style={styles.divider} />
        <Pressable style={styles.row}>
          <Text style={styles.label}>Delete account</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.textSubtle} />
        </Pressable>
      </View>
    </ProfileScreenLayout>
  );
}
