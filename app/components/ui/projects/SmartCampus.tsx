import { CldImage } from 'next-cloudinary';

export default function CrackcodeImage() {
    return (
        <CldImage
            src="Smart_Campus_Api_fgiioq"   // Replace with actual public_id from Cloudinary
            fill
            alt="Crackcode Project"
            quality="auto"
            format="auto"
            crop="fill"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
        />
    );
}