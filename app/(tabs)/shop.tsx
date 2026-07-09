import { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { BrandCard } from '@/components/ecommerce/brand-card';
import { FilterPill } from '@/components/ecommerce/filter-pill';
import { OfferCard } from '@/components/ecommerce/offer-card';
import { ShopCard } from '@/components/ecommerce/shop-card';
import { BRANDS, SHOP_CATEGORIES, SHOP_OFFERS, SHOPS } from '@/constants/shops';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

export default function ShopScreen() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
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
      paddingHorizontal: 20,
      paddingTop: 8,
      paddingBottom: 12,
    },
    title: {
      fontSize: 26,
      fontWeight: '700',
      color: c.text,
    },
    subtitle: {
      fontSize: 14,
      color: c.textMuted,
      marginTop: 4,
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
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 24,
      marginBottom: 14,
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
    horizontalList: {
      paddingHorizontal: 20,
      gap: 16,
    },
    filters: {
      paddingHorizontal: 20,
      gap: 8,
      marginBottom: 4,
    },
    resultCount: {
      fontSize: 13,
      color: c.textMuted,
      paddingHorizontal: 20,
      marginTop: 12,
      marginBottom: 12,
    },
    shopList: {
      paddingHorizontal: 20,
      gap: 14,
    },
    empty: {
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 20,
      gap: 8,
    },
    emptyTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: c.text,
    },
    emptySubtitle: {
      fontSize: 14,
      color: c.textMuted,
    },
  }));

  const filteredShops = useMemo(() => {
    let results = [...SHOPS];

    if (activeCategory !== 'All') {
      results = results.filter((shop) => shop.category === activeCategory);
    }

    if (search.trim()) {
      const query = search.toLowerCase();
      results = results.filter(
        (shop) =>
          shop.name.toLowerCase().includes(query) ||
          shop.tagline.toLowerCase().includes(query) ||
          shop.category.toLowerCase().includes(query),
      );
    }

    return results;
  }, [search, activeCategory]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>Shops</Text>
          <Text style={styles.subtitle}>Discover brands & stores</Text>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color={colors.textSubtle} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search shops & brands..."
            placeholderTextColor={colors.textSubtle}
            style={styles.searchInput}
          />
        </View>

        <SectionHeader title="Top Brands" styles={styles} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}>
          {BRANDS.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </ScrollView>

        <SectionHeader title="Hot Offers" action="See all" styles={styles} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}>
          {SHOP_OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </ScrollView>

        <SectionHeader title="All Shops" styles={styles} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}>
          {SHOP_CATEGORIES.map((category) => (
            <FilterPill
              key={category}
              label={category}
              active={activeCategory === category}
              onPress={() => setActiveCategory(category)}
            />
          ))}
        </ScrollView>

        <Text style={styles.resultCount}>
          {filteredShops.length} shop{filteredShops.length !== 1 ? 's' : ''}
        </Text>

        {filteredShops.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="storefront-outline" size={48} color={colors.textSubtle} />
            <Text style={styles.emptyTitle}>No shops found</Text>
            <Text style={styles.emptySubtitle}>Try a different search or category</Text>
          </View>
        ) : (
          <View style={styles.shopList}>
            {filteredShops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function SectionHeader({
  title,
  action,
  styles,
}: {
  title: string;
  action?: string;
  styles: ReturnType<typeof useThemedStyles>;
}) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action && <Text style={styles.sectionAction}>{action}</Text>}
    </View>
  );
}
