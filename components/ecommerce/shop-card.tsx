import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { Shop } from '@/constants/shops';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

type ShopCardProps = {
  shop: Shop;
};

export function ShopCard({ shop }: ShopCardProps) {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    card: {
      backgroundColor: c.surface,
      borderRadius: 14,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: c.border,
    },
    cover: {
      width: '100%',
      height: 100,
      backgroundColor: c.imagePlaceholder,
    },
    body: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 14,
      gap: 12,
    },
    logo: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: c.imagePlaceholder,
      marginTop: -30,
      borderWidth: 3,
      borderColor: c.surface,
    },
    info: {
      flex: 1,
      gap: 2,
    },
    nameRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    name: {
      fontSize: 16,
      fontWeight: '700',
      color: c.text,
    },
    tagline: {
      fontSize: 13,
      color: c.textMuted,
    },
    meta: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 2,
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 3,
    },
    ratingText: {
      fontSize: 12,
      fontWeight: '600',
      color: c.text,
    },
    reviews: {
      fontSize: 12,
      color: c.textSubtle,
    },
    dot: {
      color: c.textSubtle,
      marginHorizontal: 6,
    },
    products: {
      fontSize: 12,
      color: c.textSubtle,
    },
    offerTag: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      marginTop: 6,
      backgroundColor: c.dangerBg,
      alignSelf: 'flex-start',
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 6,
    },
    offerText: {
      fontSize: 11,
      fontWeight: '600',
      color: c.danger,
    },
  }));

  return (
    <Pressable style={styles.card}>
      <Image source={{ uri: shop.coverImage }} style={styles.cover} contentFit="cover" />
      <View style={styles.body}>
        <Image source={{ uri: shop.logo }} style={styles.logo} contentFit="cover" />
        <View style={styles.info}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{shop.name}</Text>
            {shop.isVerified && (
              <Ionicons name="checkmark-circle" size={16} color={colors.accent} />
            )}
          </View>
          <Text style={styles.tagline} numberOfLines={1}>
            {shop.tagline}
          </Text>
          <View style={styles.meta}>
            <View style={styles.rating}>
              <Ionicons name="star" size={12} color={colors.warning} />
              <Text style={styles.ratingText}>{shop.rating}</Text>
              <Text style={styles.reviews}>({shop.reviewCount})</Text>
            </View>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.products}>{shop.productCount} products</Text>
          </View>
          {shop.activeOffer && (
            <View style={styles.offerTag}>
              <Ionicons name="pricetag" size={11} color={colors.danger} />
              <Text style={styles.offerText}>{shop.activeOffer}</Text>
            </View>
          )}
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textSubtle} />
      </View>
    </Pressable>
  );
}
