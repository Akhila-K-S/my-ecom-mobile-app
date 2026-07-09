import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { RemoteImage } from '@/components/remote-image';
import type { CartItem } from '@/constants/cart';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

type CartItemRowProps = {
  item: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export function CartItemRow({ item, onIncrease, onDecrease, onRemove }: CartItemRowProps) {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    row: {
      flexDirection: 'row',
      gap: 12,
      padding: 14,
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 10,
      backgroundColor: c.imagePlaceholder,
    },
    info: {
      flex: 1,
      gap: 4,
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    shopName: {
      fontSize: 11,
      color: c.textMuted,
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    name: {
      fontSize: 14,
      fontWeight: '600',
      color: c.text,
      lineHeight: 18,
    },
    variant: {
      fontSize: 12,
      color: c.textSubtle,
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 4,
    },
    price: {
      fontSize: 15,
      fontWeight: '700',
      color: c.text,
    },
    quantity: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      backgroundColor: c.background,
      borderRadius: 8,
      padding: 4,
    },
    qtyButton: {
      width: 28,
      height: 28,
      borderRadius: 6,
      backgroundColor: c.surface,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: c.border,
    },
    qtyText: {
      fontSize: 14,
      fontWeight: '600',
      color: c.text,
      minWidth: 20,
      textAlign: 'center',
    },
  }));

  const lineTotal = item.product.price * item.quantity;
  const variant = [item.size, item.color].filter(Boolean).join(' · ');

  return (
    <View style={styles.row}>
      <RemoteImage uri={item.product.image} style={styles.image} contentFit="cover" />
      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text style={styles.shopName}>{item.shopName}</Text>
          <Pressable onPress={onRemove} hitSlop={8}>
            <Ionicons name="trash-outline" size={18} color={colors.textSubtle} />
          </Pressable>
        </View>
        <Text style={styles.name} numberOfLines={2}>
          {item.product.name}
        </Text>
        {variant ? <Text style={styles.variant}>{variant}</Text> : null}
        <View style={styles.bottomRow}>
          <Text style={styles.price}>${lineTotal.toFixed(2)}</Text>
          <View style={styles.quantity}>
            <Pressable style={styles.qtyButton} onPress={onDecrease}>
              <Ionicons name="remove" size={16} color={colors.text} />
            </Pressable>
            <Text style={styles.qtyText}>{item.quantity}</Text>
            <Pressable style={styles.qtyButton} onPress={onIncrease}>
              <Ionicons name="add" size={16} color={colors.text} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
