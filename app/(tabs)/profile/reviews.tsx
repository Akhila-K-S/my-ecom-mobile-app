import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { USER_REVIEWS } from '@/constants/profile-data';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

export default function ReviewsScreen() {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    card: {
      backgroundColor: c.surface,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: c.border,
      padding: 16,
      marginBottom: 12,
      gap: 12,
    },
    cardHeader: {
      flexDirection: 'row',
      gap: 12,
    },
    image: {
      width: 56,
      height: 56,
      borderRadius: 10,
      backgroundColor: c.imagePlaceholder,
    },
    headerInfo: {
      flex: 1,
      gap: 4,
    },
    productName: {
      fontSize: 15,
      fontWeight: '600',
      color: c.text,
    },
    stars: {
      flexDirection: 'row',
      gap: 2,
    },
    date: {
      fontSize: 12,
      color: c.textSubtle,
    },
    comment: {
      fontSize: 14,
      color: c.textSecondary,
      lineHeight: 20,
    },
  }));

  return (
    <ProfileScreenLayout title="My Reviews">
      {USER_REVIEWS.map((review) => (
        <View key={review.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Image source={{ uri: review.productImage }} style={styles.image} contentFit="cover" />
            <View style={styles.headerInfo}>
              <Text style={styles.productName}>{review.productName}</Text>
              <View style={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Ionicons
                    key={i}
                    name={i < review.rating ? 'star' : 'star-outline'}
                    size={14}
                    color={colors.warning}
                  />
                ))}
              </View>
              <Text style={styles.date}>{review.date}</Text>
            </View>
          </View>
          <Text style={styles.comment}>{review.comment}</Text>
        </View>
      ))}
    </ProfileScreenLayout>
  );
}
