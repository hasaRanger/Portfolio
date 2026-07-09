import { CldImage } from 'next-cloudinary';

export default function NexusCRMImage() {
    return (
        <CldImage
            src="NexusCRM_dfhfn0"   // Replace with actual public_id from Cloudinary
            fill
            alt="NexusCRM — customer relationship management system with Vue.js, Laravel and MySQL"
            quality="auto"
            format="auto"
            crop="fill"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
        />
    );
}