import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { FAQ_ITEMS } from '@/constants/profile-data';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

const CONTACT_OPTIONS = [
  { id: 'chat', label: 'Live Chat', icon: 'chatbubble-outline' as const },
  { id: 'email', label: 'Email Support', icon: 'mail-outline' as const },
  { id: 'phone', label: 'Call Us', icon: 'call-outline' as const },
];

export default function HelpScreen() {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    sectionTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: c.textMuted,
      marginBottom: 10,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    contactCard: {
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      marginBottom: 24,
      overflow: 'hidden',
    },
    contactRow: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      gap: 12,
    },
    contactLabel: {
      flex: 1,
      fontSize: 15,
      color: c.text,
    },
    divider: {
      height: 1,
      backgroundColor: c.borderLight,
      marginLeft: 48,
    },
    faqCard: {
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      padding: 16,
      marginBottom: 10,
      gap: 8,
    },
    question: {
      fontSize: 15,
      fontWeight: '600',
      color: c.text,
    },
    answer: {
      fontSize: 14,
      color: c.textMuted,
      lineHeight: 20,
    },
  }));

  return (
    <ProfileScreenLayout title="Help & Support">
      <Text style={styles.sectionTitle}>Contact us</Text>
      <View style={styles.contactCard}>
        {CONTACT_OPTIONS.map((option, index) => (
          <View key={option.id}>
            <Pressable style={styles.contactRow}>
              <Ionicons name={option.icon} size={20} color={colors.textSecondary} />
              <Text style={styles.contactLabel}>{option.label}</Text>
              <Ionicons name="chevron-forward" size={16} color={colors.textSubtle} />
            </Pressable>
            {index < CONTACT_OPTIONS.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>FAQ</Text>
      {FAQ_ITEMS.map((item, index) => (
        <View key={index} style={styles.faqCard}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      ))}
    </ProfileScreenLayout>
  );
}
