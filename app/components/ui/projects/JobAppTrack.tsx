import { CldImage } from 'next-cloudinary';

export default function CrackcodeImage() {
    return (
        <CldImage
            src="Job_Application_Tracker_wrhjfm"   // Replace with actual public_id from Cloudinary
            fill
            alt="Job Application Tracker — Next.js job tracking dashboard"
            quality="auto"
            format="auto"
            crop="fill"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
        />
    );
}