import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { PAYMENT_METHODS } from '@/constants/profile-data';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

export default function PaymentsScreen() {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      padding: 16,
      marginBottom: 12,
    },
    cardLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 14,
    },
    iconBox: {
      width: 44,
      height: 44,
      borderRadius: 10,
      backgroundColor: c.surfaceSecondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardType: {
      fontSize: 15,
      fontWeight: '600',
      color: c.text,
    },
    expiry: {
      fontSize: 13,
      color: c.textSubtle,
      marginTop: 2,
    },
    cardRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    default: {
      fontSize: 12,
      color: c.textMuted,
    },
    addButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      paddingVertical: 16,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      borderStyle: 'dashed',
      marginTop: 4,
    },
    addText: {
      fontSize: 15,
      fontWeight: '500',
      color: c.text,
    },
  }));

  return (
    <ProfileScreenLayout title="Payment Methods">
      {PAYMENT_METHODS.map((method) => (
        <View key={method.id} style={styles.card}>
          <View style={styles.cardLeft}>
            <View style={styles.iconBox}>
              <Ionicons name="card-outline" size={22} color={colors.textSecondary} />
            </View>
            <View>
              <Text style={styles.cardType}>
                {method.type === 'visa' ? 'Visa' : 'Mastercard'} ···· {method.last4}
              </Text>
              <Text style={styles.expiry}>Expires {method.expiry}</Text>
            </View>
          </View>
          <View style={styles.cardRight}>
            {method.isDefault && <Text style={styles.default}>Default</Text>}
            <Pressable>
              <Ionicons name="ellipsis-horizontal" size={18} color={colors.textSubtle} />
            </Pressable>
          </View>
        </View>
      ))}
      <Pressable style={styles.addButton}>
        <Ionicons name="add" size={20} color={colors.text} />
        <Text style={styles.addText}>Add payment method</Text>
      </Pressable>
    </ProfileScreenLayout>
  );
}
