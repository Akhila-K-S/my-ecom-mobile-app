import { Pressable, Text } from 'react-native';

import { RemoteImage } from '@/components/remote-image';
import type { Brand } from '@/constants/shops';
import { useThemedStyles } from '@/hooks/use-app-theme';

type BrandCardProps = {
  brand: Brand;
};

export function BrandCard({ brand }: BrandCardProps) {
  const styles = useThemedStyles((c) => ({
    card: {
      alignItems: 'center',
      width: 80,
      gap: 6,
    },
    logo: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: c.imagePlaceholder,
      borderWidth: 2,
      borderColor: c.surface,
    },
    name: {
      fontSize: 12,
      fontWeight: '600',
      color: c.text,
      textAlign: 'center',
    },
    category: {
      fontSize: 10,
      color: c.textSubtle,
      textAlign: 'center',
    },
  }));

  return (
    <Pressable style={styles.card}>
      <RemoteImage uri={brand.logo} style={styles.logo} contentFit="cover" />
      <Text style={styles.name} numberOfLines={1}>
        {brand.name}
      </Text>
      <Text style={styles.category}>{brand.category}</Text>
    </Pressable>
  );
}
