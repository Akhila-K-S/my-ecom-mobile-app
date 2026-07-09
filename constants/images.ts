export const NO_IMAGE_URL = 'https://cdn.kibsons.com/static/no_image.png';

export function getImageUri(uri?: string | null): string {
  const trimmed = uri?.trim();
  return trimmed ? trimmed : NO_IMAGE_URL;
}
