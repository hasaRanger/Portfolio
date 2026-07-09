import { CldImage } from 'next-cloudinary';

export default function CrackcodeImage() {
    return (
        <CldImage
            src="Profile_Pic_q7dk7k"   // Replace with actual public_id from Cloudinary
            fill
            alt="Crackcode - Narrative-driven Programming Learning Platform"
            quality="auto"
            format="auto"
            crop="fill"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
        />
    );
}