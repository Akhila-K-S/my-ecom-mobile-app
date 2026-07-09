import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

type ProfileScreenLayoutProps = {
  title: string;
  children: React.ReactNode;
  scrollable?: boolean;
};

export function ProfileScreenLayout({
  title,
  children,
  scrollable = true,
}: ProfileScreenLayoutProps) {
  const router = useRouter();
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    safeArea: { flex: 1, backgroundColor: c.background },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: c.border,
      backgroundColor: c.surface,
    },
    backButton: { width: 32, alignItems: 'flex-start' },
    title: { fontSize: 17, fontWeight: '600', color: c.text },
    scroll: { padding: 20, paddingBottom: 32 },
    content: { flex: 1, padding: 20 },
  }));

  const content = scrollable ? (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
      {children}
    </ScrollView>
  ) : (
    <View style={styles.content}>{children}</View>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton} hitSlop={8}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.backButton} />
      </View>
      {content}
    </SafeAreaView>
  );
}
