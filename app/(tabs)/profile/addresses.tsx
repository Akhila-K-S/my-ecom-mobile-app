import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { ADDRESSES } from '@/constants/profile-data';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

export default function AddressesScreen() {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    card: {
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      padding: 16,
      marginBottom: 12,
      gap: 4,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    labelRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    label: {
      fontSize: 15,
      fontWeight: '600',
      color: c.text,
    },
    defaultBadge: {
      backgroundColor: c.surfaceSecondary,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 4,
    },
    defaultText: {
      fontSize: 11,
      color: c.textMuted,
      fontWeight: '500',
    },
    name: {
      fontSize: 14,
      fontWeight: '500',
      color: c.textSecondary,
    },
    street: {
      fontSize: 14,
      color: c.textMuted,
      lineHeight: 20,
    },
    city: {
      fontSize: 14,
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
    <ProfileScreenLayout title="Saved Addresses">
      {ADDRESSES.map((address) => (
        <View key={address.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.labelRow}>
              <Ionicons name="location-outline" size={18} color={colors.textSecondary} />
              <Text style={styles.label}>{address.label}</Text>
              {address.isDefault && (
                <View style={styles.defaultBadge}>
                  <Text style={styles.defaultText}>Default</Text>
                </View>
              )}
            </View>
            <Pressable>
              <Ionicons name="create-outline" size={18} color={colors.textSubtle} />
            </Pressable>
          </View>
          <Text style={styles.name}>{address.name}</Text>
          <Text style={styles.street}>{address.street}</Text>
          <Text style={styles.city}>
            {address.city} {address.zip}
          </Text>
        </View>
      ))}
      <Pressable style={styles.addButton}>
        <Ionicons name="add" size={20} color={colors.text} />
        <Text style={styles.addText}>Add new address</Text>
      </Pressable>
    </ProfileScreenLayout>
  );
}
