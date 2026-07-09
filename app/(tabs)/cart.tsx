import { useMemo, useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { CartItemRow } from '@/components/ecommerce/cart-item-row';
import {
  FREE_SHIPPING_THRESHOLD,
  INITIAL_CART_ITEMS,
  SHIPPING_FEE,
  type CartItem,
} from '@/constants/cart';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

const PROMO_CODES: Record<string, number> = {
  SAVE10: 0.1,
};

export default function CartScreen() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState('');
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    safeArea: {
      flex: 1,
      backgroundColor: c.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 8,
      paddingBottom: 12,
    },
    title: {
      fontSize: 26,
      fontWeight: '700',
      color: c.text,
    },
    itemCount: {
      fontSize: 14,
      color: c.textMuted,
      marginTop: 2,
    },
    clearText: {
      fontSize: 14,
      color: c.textMuted,
    },
    scroll: {
      paddingHorizontal: 20,
      paddingBottom: 16,
    },
    shopGroup: {
      marginBottom: 20,
    },
    shopHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginBottom: 10,
    },
    shopTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: c.textSecondary,
    },
    itemList: {
      gap: 10,
    },
    promoSection: {
      backgroundColor: c.surface,
      borderRadius: 14,
      padding: 14,
      borderWidth: 1,
      borderColor: c.border,
      marginBottom: 16,
    },
    promoLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: c.text,
      marginBottom: 10,
    },
    promoRow: {
      flexDirection: 'row',
      gap: 10,
    },
    promoInput: {
      flex: 1,
      height: 44,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: 10,
      paddingHorizontal: 12,
      fontSize: 14,
      color: c.text,
      backgroundColor: c.background,
    },
    promoButton: {
      backgroundColor: c.primary,
      paddingHorizontal: 18,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    promoButtonText: {
      color: c.primaryInverse,
      fontSize: 14,
      fontWeight: '600',
    },
    promoSuccess: {
      fontSize: 12,
      color: c.success,
      marginTop: 8,
      fontWeight: '500',
    },
    promoError: {
      fontSize: 12,
      color: c.danger,
      marginTop: 8,
    },
    summary: {
      backgroundColor: c.surface,
      borderRadius: 14,
      padding: 16,
      borderWidth: 1,
      borderColor: c.border,
      gap: 10,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    summaryLabel: {
      fontSize: 14,
      color: c.textMuted,
    },
    summaryValue: {
      fontSize: 14,
      color: c.text,
      fontWeight: '500',
    },
    summaryBold: {
      fontSize: 16,
      fontWeight: '700',
      color: c.text,
    },
    summaryHighlight: {
      color: c.success,
      fontWeight: '600',
    },
    divider: {
      height: 1,
      backgroundColor: c.borderLight,
      marginVertical: 4,
    },
    footer: {
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 8,
      backgroundColor: c.surface,
      borderTopWidth: 1,
      borderTopColor: c.border,
      gap: 8,
    },
    shippingHint: {
      fontSize: 12,
      color: c.textMuted,
      textAlign: 'center',
    },
    checkoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      backgroundColor: c.primary,
      paddingVertical: 16,
      borderRadius: 14,
    },
    checkoutText: {
      color: c.primaryInverse,
      fontSize: 16,
      fontWeight: '700',
    },
    empty: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 80,
      gap: 8,
    },
    emptyIcon: {
      width: 88,
      height: 88,
      borderRadius: 44,
      backgroundColor: c.surfaceSecondary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
    },
    emptyTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: c.text,
    },
    emptySubtitle: {
      fontSize: 14,
      color: c.textMuted,
    },
  }));

  const groupedItems = useMemo(() => {
    const groups: Record<string, CartItem[]> = {};
    for (const item of items) {
      if (!groups[item.shopName]) groups[item.shopName] = [];
      groups[item.shopName].push(item);
    }
    return Object.entries(groups);
  }, [items]);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || items.length === 0 ? 0 : SHIPPING_FEE;
  const discountRate = appliedPromo ? PROMO_CODES[appliedPromo] : 0;
  const discount = subtotal * discountRate;
  const total = subtotal + shipping - discount;

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    Alert.alert('Clear cart', 'Remove all items from your cart?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Clear',
        style: 'destructive',
        onPress: () => {
          setItems([]);
          setPromoCode('');
          setAppliedPromo(null);
          setPromoError('');
        },
      },
    ]);
  };

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setAppliedPromo(code);
      setPromoError('');
    } else {
      setAppliedPromo(null);
      setPromoError('Invalid promo code');
    }
  };

  function SummaryRow({
    label,
    value,
    bold,
    highlight,
  }: {
    label: string;
    value: string;
    bold?: boolean;
    highlight?: boolean;
  }) {
    return (
      <View style={styles.summaryRow}>
        <Text style={[styles.summaryLabel, bold && styles.summaryBold]}>{label}</Text>
        <Text
          style={[
            styles.summaryValue,
            bold && styles.summaryBold,
            highlight && styles.summaryHighlight,
          ]}>
          {value}
        </Text>
      </View>
    );
  }

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.title}>My Cart</Text>
        </View>
        <View style={styles.empty}>
          <View style={styles.emptyIcon}>
            <Ionicons name="bag-outline" size={48} color={colors.textSubtle} />
          </View>
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptySubtitle}>Add items from your favorite shops</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Cart</Text>
          <Text style={styles.itemCount}>
            {itemCount} item{itemCount !== 1 ? 's' : ''}
          </Text>
        </View>
        <Pressable onPress={clearCart}>
          <Text style={styles.clearText}>Clear cart</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled">
        {groupedItems.map(([shopName, shopItems]) => (
          <View key={shopName} style={styles.shopGroup}>
            <View style={styles.shopHeader}>
              <Ionicons name="storefront-outline" size={16} color={colors.textMuted} />
              <Text style={styles.shopTitle}>{shopName}</Text>
            </View>
            <View style={styles.itemList}>
              {shopItems.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onIncrease={() => updateQuantity(item.id, 1)}
                  onDecrease={() => updateQuantity(item.id, -1)}
                  onRemove={() => removeItem(item.id)}
                />
              ))}
            </View>
          </View>
        ))}

        <View style={styles.promoSection}>
          <Text style={styles.promoLabel}>Promo Code</Text>
          <View style={styles.promoRow}>
            <TextInput
              value={promoCode}
              onChangeText={(text) => {
                setPromoCode(text);
                setPromoError('');
              }}
              placeholder="Enter code (SAVE10)"
              placeholderTextColor={colors.textSubtle}
              style={styles.promoInput}
              autoCapitalize="characters"
            />
            <Pressable style={styles.promoButton} onPress={applyPromo}>
              <Text style={styles.promoButtonText}>Apply</Text>
            </Pressable>
          </View>
          {appliedPromo && (
            <Text style={styles.promoSuccess}>
              {appliedPromo} applied — {discountRate * 100}% off
            </Text>
          )}
          {promoError ? <Text style={styles.promoError}>{promoError}</Text> : null}
        </View>

        <View style={styles.summary}>
          <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
          <SummaryRow
            label="Shipping"
            value={shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
            highlight={shipping === 0}
          />
          {discount > 0 && (
            <SummaryRow label="Discount" value={`-$${discount.toFixed(2)}`} highlight />
          )}
          <View style={styles.divider} />
          <SummaryRow label="Total" value={`$${total.toFixed(2)}`} bold />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        {subtotal < FREE_SHIPPING_THRESHOLD && (
          <Text style={styles.shippingHint}>
            Add ${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping
          </Text>
        )}
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout · ${total.toFixed(2)}</Text>
          <Ionicons name="arrow-forward" size={18} color={colors.primaryInverse} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
