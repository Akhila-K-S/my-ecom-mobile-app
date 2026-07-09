import { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

const NOTIFICATION_SETTINGS = [
  { id: 'orders', label: 'Order updates', description: 'Shipping and delivery notifications' },
  { id: 'offers', label: 'Offers & promotions', description: 'Deals from your followed shops' },
  { id: 'reminders', label: 'Cart reminders', description: 'Items left in your cart' },
  { id: 'news', label: 'News & announcements', description: 'App updates and new features' },
];

export default function NotificationsScreen() {
  const { colors } = useAppTheme();
  const [settings, setSettings] = useState<Record<string, boolean>>({
    orders: true,
    offers: true,
    reminders: false,
    news: false,
  });

  const styles = useThemedStyles((c) => ({
    card: {
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      overflow: 'hidden',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      gap: 16,
    },
    rowInfo: {
      flex: 1,
      gap: 2,
    },
    label: {
      fontSize: 15,
      fontWeight: '500',
      color: c.text,
    },
    description: {
      fontSize: 13,
      color: c.textSubtle,
    },
    divider: {
      height: 1,
      backgroundColor: c.borderLight,
      marginLeft: 16,
    },
  }));

  const toggle = (id: string) => {
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ProfileScreenLayout title="Notifications">
      <View style={styles.card}>
        {NOTIFICATION_SETTINGS.map((item, index) => (
          <View key={item.id}>
            <View style={styles.row}>
              <View style={styles.rowInfo}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <Switch
                value={settings[item.id]}
                onValueChange={() => toggle(item.id)}
                trackColor={{ false: colors.switchTrackOff, true: colors.switchTrackOn }}
                thumbColor={colors.primaryInverse}
              />
            </View>
            {index < NOTIFICATION_SETTINGS.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>
    </ProfileScreenLayout>
  );
}
