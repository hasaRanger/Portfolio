import { CldImage } from 'next-cloudinary';

export default function CrackcodeImage() {
    return (
        <CldImage
            src="Customer_Management_System_e4dccq"   // Replace with actual public_id from Cloudinary
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