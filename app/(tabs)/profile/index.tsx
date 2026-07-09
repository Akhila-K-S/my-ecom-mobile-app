import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { ProfileMenuRow } from '@/components/ecommerce/profile-menu-row';
import {
  ACCOUNT_MENU,
  SETTINGS_MENU,
  SHOPPING_MENU,
  USER_PROFILE,
} from '@/constants/user';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

export default function ProfileScreen() {
  const router = useRouter();
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    safeArea: {
      flex: 1,
      backgroundColor: c.background,
    },
    scroll: {
      paddingBottom: 32,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 8,
      paddingBottom: 16,
    },
    title: {
      fontSize: 26,
      fontWeight: '700',
      color: c.text,
    },
    profileCard: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      padding: 16,
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      gap: 14,
    },
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: c.imagePlaceholder,
    },
    profileInfo: {
      flex: 1,
      gap: 2,
    },
    name: {
      fontSize: 18,
      fontWeight: '700',
      color: c.text,
    },
    email: {
      fontSize: 13,
      color: c.textMuted,
    },
    memberSince: {
      fontSize: 12,
      color: c.textSubtle,
      marginTop: 2,
    },
    stats: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginTop: 14,
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      paddingVertical: 16,
    },
    statItem: {
      flex: 1,
      alignItems: 'center',
      gap: 4,
    },
    statValue: {
      fontSize: 20,
      fontWeight: '700',
      color: c.text,
    },
    statLabel: {
      fontSize: 12,
      color: c.textMuted,
    },
    statDivider: {
      width: 1,
      backgroundColor: c.borderLight,
    },
    section: {
      marginTop: 24,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: c.textMuted,
      marginBottom: 10,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    menuCard: {
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      overflow: 'hidden',
    },
    menuDivider: {
      height: 1,
      backgroundColor: c.borderLight,
      marginLeft: 48,
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginHorizontal: 20,
      marginTop: 28,
      paddingVertical: 14,
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
    },
    logoutText: {
      fontSize: 15,
      fontWeight: '500',
      color: c.textMuted,
    },
    version: {
      textAlign: 'center',
      fontSize: 12,
      color: c.textSubtle,
      marginTop: 8,
    },
  }));

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <Pressable onPress={() => router.push('/profile/settings')}>
            <Ionicons name="settings-outline" size={22} color={colors.text} />
          </Pressable>
        </View>

        <View style={styles.profileCard}>
          <Image source={{ uri: USER_PROFILE.avatar }} style={styles.avatar} contentFit="cover" />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{USER_PROFILE.name}</Text>
            <Text style={styles.email}>{USER_PROFILE.email}</Text>
            <Text style={styles.memberSince}>Member since {USER_PROFILE.memberSince}</Text>
          </View>
          <Pressable onPress={() => router.push('/profile/edit')}>
            <Ionicons name="create-outline" size={20} color={colors.textMuted} />
          </Pressable>
        </View>

        <View style={styles.stats}>
          <StatItem
            value={USER_PROFILE.orderCount}
            label="Orders"
            onPress={() => router.push('/profile/orders')}
            styles={styles}
          />
          <View style={styles.statDivider} />
          <StatItem
            value={USER_PROFILE.wishlistCount}
            label="Wishlist"
            onPress={() => router.push('/profile/wishlist')}
            styles={styles}
          />
          <View style={styles.statDivider} />
          <StatItem
            value={USER_PROFILE.followedShops}
            label="Shops"
            onPress={() => router.push('/profile/shops')}
            styles={styles}
          />
        </View>

        <MenuSection title="Account" items={ACCOUNT_MENU} styles={styles} />
        <MenuSection title="Shopping" items={SHOPPING_MENU} styles={styles} />
        <MenuSection title="Settings" items={SETTINGS_MENU} styles={styles} />

        <Pressable style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={18} color={colors.textMuted} />
          <Text style={styles.logoutText}>Log out</Text>
        </Pressable>

        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatItem({
  value,
  label,
  onPress,
  styles,
}: {
  value: number;
  label: string;
  onPress: () => void;
  styles: ReturnType<typeof useThemedStyles>;
}) {
  return (
    <Pressable style={styles.statItem} onPress={onPress}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </Pressable>
  );
}

function MenuSection({
  title,
  items,
  styles,
}: {
  title: string;
  items: typeof ACCOUNT_MENU;
  styles: ReturnType<typeof useThemedStyles>;
}) {
  const router = useRouter();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.menuCard}>
        {items.map((item, index) => (
          <View key={item.id}>
            <ProfileMenuRow
              item={item}
              onPress={() => router.push(`/profile/${item.id}` as `/profile/${string}`)}
            />
            {index < items.length - 1 && <View style={styles.menuDivider} />}
          </View>
        ))}
      </View>
    </View>
  );
}
