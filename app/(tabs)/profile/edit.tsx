import { useState } from 'react';
import { Image } from 'expo-image';
import { Pressable, Text, TextInput, View } from 'react-native';

import { ProfileScreenLayout } from '@/components/ecommerce/profile-screen-layout';
import { USER_PROFILE } from '@/constants/user';
import { useAppTheme, useThemedStyles } from '@/hooks/use-app-theme';

export default function EditProfileScreen() {
  const [name, setName] = useState(USER_PROFILE.name);
  const [email, setEmail] = useState(USER_PROFILE.email);
  const [phone, setPhone] = useState('+1 (555) 123-4567');

  const styles = useThemedStyles((c) => ({
    avatarSection: {
      alignItems: 'center',
      marginBottom: 28,
      gap: 10,
    },
    avatar: {
      width: 88,
      height: 88,
      borderRadius: 44,
      backgroundColor: c.imagePlaceholder,
    },
    changePhoto: {
      fontSize: 14,
      color: c.accent,
      fontWeight: '500',
    },
    form: {
      gap: 16,
      marginBottom: 28,
    },
    saveButton: {
      backgroundColor: c.primary,
      paddingVertical: 16,
      borderRadius: 14,
      alignItems: 'center',
    },
    saveText: {
      color: c.primaryInverse,
      fontSize: 16,
      fontWeight: '600',
    },
  }));

  return (
    <ProfileScreenLayout title="Edit Profile">
      <View style={styles.avatarSection}>
        <Image source={{ uri: USER_PROFILE.avatar }} style={styles.avatar} contentFit="cover" />
        <Pressable>
          <Text style={styles.changePhoto}>Change photo</Text>
        </Pressable>
      </View>

      <View style={styles.form}>
        <FormField label="Full name" value={name} onChangeText={setName} />
        <FormField
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <FormField label="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      </View>

      <Pressable style={styles.saveButton}>
        <Text style={styles.saveText}>Save changes</Text>
      </Pressable>
    </ProfileScreenLayout>
  );
}

function FormField({
  label,
  value,
  onChangeText,
  ...props
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
} & React.ComponentProps<typeof TextInput>) {
  const { colors } = useAppTheme();
  const styles = useThemedStyles((c) => ({
    field: {
      gap: 6,
    },
    fieldLabel: {
      fontSize: 13,
      fontWeight: '500',
      color: c.textMuted,
    },
    input: {
      backgroundColor: c.inputBackground,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 12,
      fontSize: 15,
      color: c.text,
    },
  }));

  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor={colors.textSubtle}
        {...props}
      />
    </View>
  );
}
