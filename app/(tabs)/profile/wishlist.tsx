import { StyleSheet, View } from 'react-native';

import { ProductCard } from '@/components/ecommerce/product-card';
import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { WISHLIST_PRODUCTS } from '@/constants/profile-data';

export default function WishlistScreen() {
  return (
    <ProfileScreenLayout title="Wishlist">
      <View style={styles.grid}>
        {WISHLIST_PRODUCTS.map((product) => (
          <View key={product.id} style={styles.gridItem}>
            <ProductCard product={product} />
          </View>
        ))}
      </View>
    </ProfileScreenLayout>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gridItem: {
    width: '47.5%',
  },
});
