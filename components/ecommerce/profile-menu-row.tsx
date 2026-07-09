import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { ProfileMenuItem } from '@/constants/user';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

type ProfileMenuRowProps = {
  item: ProfileMenuItem;
  onPress?: () => void;
};

export function ProfileMenuRow({ item, onPress }: ProfileMenuRowProps) {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 14,
      paddingHorizontal: 16,
    },
    left: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    label: {
      fontSize: 15,
      color: c.text,
    },
    right: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    badge: {
      fontSize: 12,
      color: c.textMuted,
    },
  }));

  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={styles.left}>
        <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={20} color={colors.textSecondary} />
        <Text style={styles.label}>{item.label}</Text>
      </View>
      <View style={styles.right}>
        {item.badge && <Text style={styles.badge}>{item.badge}</Text>}
        <Ionicons name="chevron-forward" size={16} color={colors.textSubtle} />
      </View>
    </Pressable>
  );
}
