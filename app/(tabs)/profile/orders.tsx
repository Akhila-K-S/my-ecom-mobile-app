import { Text, View } from 'react-native';

import { RemoteImage } from '@/components/remote-image';
import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import type { AppColors } from '@/constants/theme';
import { ORDERS } from '@/constants/profile-data';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

function getStatusColors(status: string, colors: AppColors) {
  switch (status) {
    case 'Processing':
      return { color: colors.warning, backgroundColor: `${colors.warning}26` };
    case 'Shipped':
      return { color: colors.accent, backgroundColor: `${colors.accent}26` };
    case 'Delivered':
      return { color: colors.success, backgroundColor: `${colors.success}26` };
    case 'Cancelled':
      return { color: colors.danger, backgroundColor: colors.dangerBg };
    default:
      return { color: colors.textMuted, backgroundColor: colors.surfaceSecondary };
  }
}

export default function OrdersScreen() {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    card: {
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      padding: 16,
      marginBottom: 12,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 14,
    },
    orderNumber: {
      fontSize: 15,
      fontWeight: '600',
      color: c.text,
    },
    date: {
      fontSize: 13,
      color: c.textSubtle,
      marginTop: 2,
    },
    statusBadge: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
    },
    status: {
      fontSize: 12,
      fontWeight: '600',
    },
    cardBody: {
      flexDirection: 'row',
      gap: 12,
    },
    image: {
      width: 64,
      height: 64,
      borderRadius: 10,
      backgroundColor: c.imagePlaceholder,
    },
    details: {
      flex: 1,
      justifyContent: 'center',
      gap: 2,
    },
    shop: {
      fontSize: 14,
      fontWeight: '500',
      color: c.textSecondary,
    },
    items: {
      fontSize: 13,
      color: c.textSubtle,
    },
    total: {
      fontSize: 15,
      fontWeight: '700',
      color: c.text,
      marginTop: 4,
    },
  }));

  return (
    <ProfileScreenLayout title="My Orders">
      {ORDERS.map((order) => {
        const statusColors = getStatusColors(order.status, colors);
        return (
          <View key={order.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.orderNumber}>{order.orderNumber}</Text>
                <Text style={styles.date}>{order.date}</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: statusColors.backgroundColor }]}>
                <Text style={[styles.status, { color: statusColors.color }]}>{order.status}</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <RemoteImage uri={order.image} style={styles.image} contentFit="cover" />
              <View style={styles.details}>
                <Text style={styles.shop}>{order.shopName}</Text>
                <Text style={styles.items}>
                  {order.itemCount} item{order.itemCount !== 1 ? 's' : ''}
                </Text>
                <Text style={styles.total}>${order.total.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ProfileScreenLayout>
  );
}
