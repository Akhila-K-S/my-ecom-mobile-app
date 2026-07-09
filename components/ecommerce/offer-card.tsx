import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { RemoteImage } from '@/components/remote-image';
import type { ShopOffer } from '@/constants/shops';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

type OfferCardProps = {
  offer: ShopOffer;
};

export function OfferCard({ offer }: OfferCardProps) {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    card: {
      width: 260,
      height: 140,
      borderRadius: 14,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: c.overlay,
      padding: 14,
      justifyContent: 'space-between',
    },
    discountBadge: {
      alignSelf: 'flex-start',
      backgroundColor: c.danger,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
    },
    discountText: {
      color: c.primaryInverse,
      fontSize: 12,
      fontWeight: '700',
    },
    content: {
      gap: 2,
    },
    shopName: {
      color: c.textSecondary,
      fontSize: 11,
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    title: {
      color: c.primaryInverse,
      fontSize: 16,
      fontWeight: '700',
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      marginTop: 4,
    },
    expires: {
      color: c.warning,
      fontSize: 11,
      fontWeight: '500',
    },
  }));

  return (
    <Pressable style={styles.card}>
      <RemoteImage uri={offer.image} style={styles.image} contentFit="cover" />
      <View style={styles.overlay}>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{offer.discount}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.shopName}>{offer.shopName}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {offer.title}
          </Text>
          <View style={styles.footer}>
            <Ionicons name="time-outline" size={12} color={colors.warning} />
            <Text style={styles.expires}>{offer.expiresIn}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
