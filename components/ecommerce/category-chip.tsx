import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { Category } from '@/constants/products';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

const ICON_MAP: Record<Category['icon'], keyof typeof Ionicons.glyphMap> = {
  shirt: 'shirt-outline',
  laptop: 'laptop-outline',
  home: 'home-outline',
  sparkles: 'sparkles-outline',
  fitness: 'fitness-outline',
};

type CategoryChipProps = {
  category: Category;
};

export function CategoryChip({ category }: CategoryChipProps) {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    chip: {
      alignItems: 'center',
      gap: 8,
      width: 72,
    },
    label: {
      fontSize: 12,
      color: c.textSecondary,
      fontWeight: '500',
      textAlign: 'center',
    },
  }));

  return (
    <Pressable style={styles.chip}>
      <Ionicons name={ICON_MAP[category.icon]} size={22} color={colors.text} />
      <Text style={styles.label}>{category.name}</Text>
    </Pressable>
  );
}
