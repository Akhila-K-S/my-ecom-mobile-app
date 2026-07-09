import { StyleSheet, View } from 'react-native';

import { ShopCard } from '@/components/ecommerce/shop-card';
import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { FOLLOWED_SHOPS } from '@/constants/profile-data';

export default function FollowedShopsScreen() {
  return (
    <ProfileScreenLayout title="Followed Shops">
      <View style={styles.list}>
        {FOLLOWED_SHOPS.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </View>
    </ProfileScreenLayout>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 14,
  },
});
