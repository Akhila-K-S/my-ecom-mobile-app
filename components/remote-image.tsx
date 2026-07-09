import { Image, type ImageProps } from 'expo-image';
import { useState } from 'react';

import { getImageUri, NO_IMAGE_URL } from '@/constants/images';

type RemoteImageProps = Omit<ImageProps, 'source'> & {
  uri?: string | null;
};

export function RemoteImage({ uri, onError, ...props }: RemoteImageProps) {
  const [hasError, setHasError] = useState(false);
  const imageUri = hasError ? NO_IMAGE_URL : getImageUri(uri);

  return (
    <Image
      {...props}
      source={{ uri: imageUri }}
      onError={(event) => {
        if (imageUri !== NO_IMAGE_URL) {
          setHasError(true);
        }
        onError?.(event);
      }}
    />
  );
}
