import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { useThemedStyles } from '@/hooks/use-app-theme';

const LINKS = [
  { label: 'Terms of Service' },
  { label: 'Privacy Policy' },
  { label: 'Licenses' },
];

export default function AboutScreen() {
  const styles = useThemedStyles((c) => ({
    hero: {
      alignItems: 'center',
      paddingVertical: 24,
      gap: 8,
      marginBottom: 24,
    },
    logo: {
      width: 72,
      height: 72,
      borderRadius: 16,
      marginBottom: 8,
    },
    appName: {
      fontSize: 20,
      fontWeight: '700',
      color: c.text,
    },
    version: {
      fontSize: 13,
      color: c.textSubtle,
    },
    description: {
      fontSize: 14,
      color: c.textMuted,
      textAlign: 'center',
      lineHeight: 20,
      marginTop: 8,
      paddingHorizontal: 20,
    },
    linksCard: {
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      overflow: 'hidden',
      marginBottom: 24,
    },
    linkRow: {
      padding: 16,
    },
    linkLabel: {
      fontSize: 15,
      color: c.text,
    },
    divider: {
      height: 1,
      backgroundColor: c.borderLight,
      marginLeft: 16,
    },
    copyright: {
      textAlign: 'center',
      fontSize: 12,
      color: c.textSubtle,
    },
  }));

  return (
    <ProfileScreenLayout title="About">
      <View style={styles.hero}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.logo}
          contentFit="contain"
        />
        <Text style={styles.appName}>dev-my-app</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
        <Text style={styles.description}>
          Your one-stop marketplace to discover shops, browse products, and shop from your favorite
          brands.
        </Text>
      </View>

      <View style={styles.linksCard}>
        {LINKS.map((link, index) => (
          <View key={link.label}>
            <View style={styles.linkRow}>
              <Text style={styles.linkLabel}>{link.label}</Text>
            </View>
            {index < LINKS.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>

      <Text style={styles.copyright}>© 2026 dev-my-app. All rights reserved.</Text>
    </ProfileScreenLayout>
  );
}
