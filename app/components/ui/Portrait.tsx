// components/Portrait.tsx
import { CldImage } from 'next-cloudinary';

export default function Portrait() {
  return (
    <CldImage
      src="IMG_5787_1_dxiri5"   // public_id from Cloudinary (no extension)
      width={800}
      height={1000}
      alt="Nadeesha Hasaranga"
      priority                         // above-the-fold: disables lazy load
      quality="auto"                   // Cloudinary picks optimal quality
      format="auto"                    // serves WebP/AVIF to modern browsers
      crop="fill"
      gravity="face"                   // auto-centers on your face
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}