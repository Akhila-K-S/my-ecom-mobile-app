import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { Product } from '@/constants/products';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

type ProductCardProps = {
  product: Product;
  width?: number;
};

export function ProductCard({ product, width }: ProductCardProps) {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    card: {
      backgroundColor: c.surface,
      borderRadius: 12,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: c.border,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      backgroundColor: c.imagePlaceholder,
    },
    info: {
      padding: 12,
      gap: 4,
    },
    category: {
      fontSize: 11,
      color: c.textMuted,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    name: {
      fontSize: 14,
      fontWeight: '600',
      color: c.text,
      lineHeight: 18,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 4,
    },
    price: {
      fontSize: 15,
      fontWeight: '700',
      color: c.text,
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2,
    },
    ratingText: {
      fontSize: 12,
      color: c.textMuted,
      fontWeight: '500',
    },
  }));

  return (
    <Pressable style={[styles.card, width ? { width } : undefined]}>
      <Image source={{ uri: product.image }} style={styles.image} contentFit="cover" />
      <View style={styles.info}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={12} color={colors.warning} />
            <Text style={styles.ratingText}>{product.rating}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
