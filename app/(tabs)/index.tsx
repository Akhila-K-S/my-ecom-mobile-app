import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { CategoryChip } from '@/components/ecommerce/category-chip';
import { ProductCard } from '@/components/ecommerce/product-card';
import { CATEGORIES, FEATURED_PRODUCTS, NEW_ARRIVALS } from '@/constants/products';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

export default function HomeScreen() {
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
      alignItems: 'flex-start',
      paddingHorizontal: 20,
      paddingTop: 8,
      paddingBottom: 16,
    },
    greeting: {
      fontSize: 14,
      color: c.textMuted,
      marginBottom: 4,
    },
    title: {
      fontSize: 26,
      fontWeight: '700',
      color: c.text,
    },
    headerActions: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
    },
    iconButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: c.surface,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: c.border,
    },
    badge: {
      position: 'absolute',
      top: -4,
      right: -4,
      backgroundColor: c.danger,
      width: 18,
      height: 18,
      borderRadius: 9,
      alignItems: 'center',
      justifyContent: 'center',
    },
    badgeText: {
      color: c.primaryInverse,
      fontSize: 10,
      fontWeight: '700',
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: c.inputBackground,
      marginHorizontal: 20,
      paddingHorizontal: 14,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: c.border,
      gap: 10,
      height: 48,
    },
    searchInput: {
      flex: 1,
      fontSize: 15,
      color: c.text,
    },
    banner: {
      marginHorizontal: 20,
      marginTop: 20,
      borderRadius: 16,
      overflow: 'hidden',
      height: 160,
    },
    bannerImage: {
      width: '100%',
      height: '100%',
    },
    bannerOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: c.overlay,
      padding: 20,
      justifyContent: 'flex-end',
    },
    bannerTag: {
      color: c.warning,
      fontSize: 12,
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 4,
    },
    bannerTitle: {
      color: c.primaryInverse,
      fontSize: 24,
      fontWeight: '700',
    },
    bannerSubtitle: {
      color: c.textSecondary,
      fontSize: 13,
      marginTop: 4,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 28,
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: c.text,
    },
    sectionAction: {
      fontSize: 14,
      color: c.accent,
      fontWeight: '600',
    },
    categories: {
      paddingHorizontal: 20,
      gap: 16,
    },
    productGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 20,
      gap: 12,
    },
    gridItem: {
      width: '47.5%',
    },
    arrivals: {
      paddingHorizontal: 20,
      gap: 12,
    },
  }));

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello there 👋</Text>
            <Text style={styles.title}>Find your style</Text>
          </View>
          <View style={styles.headerActions}>
            <PressableIcon name="notifications-outline" styles={styles} colors={colors} />
            <View>
              <PressableIcon name="bag-outline" styles={styles} colors={colors} />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color={colors.textSubtle} />
          <TextInput
            placeholder="Search products..."
            placeholderTextColor={colors.textSubtle}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.banner}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop',
            }}
            style={styles.bannerImage}
            contentFit="cover"
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTag}>Summer Sale</Text>
            <Text style={styles.bannerTitle}>Up to 40% off</Text>
            <Text style={styles.bannerSubtitle}>On selected items this week</Text>
          </View>
        </View>

        <SectionHeader title="Categories" action="See all" styles={styles} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}>
          {CATEGORIES.map((category) => (
            <CategoryChip key={category.id} category={category} />
          ))}
        </ScrollView>

        <SectionHeader title="Featured" action="View all" styles={styles} />
        <View style={styles.productGrid}>
          {FEATURED_PRODUCTS.map((product) => (
            <View key={product.id} style={styles.gridItem}>
              <ProductCard product={product} />
            </View>
          ))}
        </View>

        <SectionHeader title="New Arrivals" action="View all" styles={styles} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.arrivals}>
          {NEW_ARRIVALS.map((product) => (
            <ProductCard key={product.id} product={product} width={160} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

function PressableIcon({
  name,
  styles,
  colors,
}: {
  name: keyof typeof Ionicons.glyphMap;
  styles: ReturnType<typeof useThemedStyles>;
  colors: ReturnType<typeof useAppTheme>['colors'];
}) {
  return (
    <View style={styles.iconButton}>
      <Ionicons name={name} size={22} color={colors.text} />
    </View>
  );
}

function SectionHeader({
  title,
  action,
  styles,
}: {
  title: string;
  action: string;
  styles: ReturnType<typeof useThemedStyles>;
}) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionAction}>{action}</Text>
    </View>
  );
}
