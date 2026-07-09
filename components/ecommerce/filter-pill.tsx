import { Pressable, Text } from 'react-native';

import { useThemedStyles } from '@/hooks/use-app-theme';

type FilterPillProps = {
  label: string;
  active?: boolean;
  onPress: () => void;
};

export function FilterPill({ label, active, onPress }: FilterPillProps) {
  const styles = useThemedStyles((c) => ({
    pill: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: c.surface,
      borderWidth: 1,
      borderColor: c.border,
    },
    pillActive: {
      backgroundColor: c.primary,
      borderColor: c.primary,
    },
    label: {
      fontSize: 13,
      fontWeight: '500',
      color: c.textSecondary,
    },
    labelActive: {
      color: c.primaryInverse,
    },
  }));

  return (
    <Pressable
      onPress={onPress}
      style={[styles.pill, active && styles.pillActive]}>
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}
