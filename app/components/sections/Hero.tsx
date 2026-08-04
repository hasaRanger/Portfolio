'use client'

import { motion } from 'framer-motion'
import TypewriterText from '../../components/ui/TypewriterText'
import { EncryptedText } from "@/components/ui/encrypted-text";
import Portrait from '../ui/Portrait'

export default function Hero() {
    return (
        <section id="hero">

            {/* ── Top heading ── */}
            <div className="mb-10">
                <TypewriterText
                    text="Aspiring Software Developer"
                    tag="h1"
                    className="text-3xl md:text-6xl font-bold leading-tight"
                    speed={45}
                    delay={0}
                    showCursor
                />
            </div>

            {/* ── Photo + name + bio block ── */}
            <div className="flex flex-col items-center md:flex-row gap-20 mb-12">

                {/* Photo */}
                <motion.div
                    className="relative shrink-0"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                >
                    <div className="w-110 h-135 relative overflow-hidden border border-[#3e3e3e]">
                        {/* <Image
                            src="/images/profile.webp"
                            alt="Nadeesha Hasaranga"
                            fill
                            sizes="(max-width: 768px) 176px, 176px"
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            priority
                        /> */}

                        {/* replaced the above Image component to utilize Cloudinary's optimizations and transformations. */}
                        <Portrait />

                    </div>
                    {/* FULLSTACK_DEV badge — fixed size so it renders with the image,
                        text types in afterwards inside the already-visible box */}
                    <div
                        className="relative bottom-2 left-50 transform -translate-x-1/3"
                        style={{
                            width: '400px', 
                            height: '32px',
                            backgroundColor: '#007acc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* <TypewriterText
                            text="Fullstack_Dev"
                            tag='span'
                            className="text-black text-md font-semibold tracking-widest uppercase"
                            delay={800}
                            speed={100}
                        /> */}

                        <EncryptedText
                            text="Fullstack_Dev"
                            className="text-black text-md font-semibold tracking-widest uppercase"
                            startDelayMs={500}
                            revealDelayMs={100}
                        />

                    </div>
                </motion.div>

                {/* Name + bio + socials */}
                <div className="flex flex-col justify-center gap-10 text-center md:text-left h-[500px] md:h-[400px]">

                    {/* Name */}
                    <TypewriterText
                        text="Nadeesha Hasaranga"
                        tag="h2"
                        className="text-3xl md:text-5xl font-bold text-[#d4d4d4]"
                        delay={600}
                        speed={40}
                    />

                    {/* Bio */}
                    <TypewriterText
                        text="Architecting digital solutions through clean code and scalable architecture. Focused on building high-performance web applications with a technical precision that rivals machine logic."
                        tag="p"
                        className="md:text-md text-[#858585] leading-relaxed md:max-w-xl h-[100px]"
                        delay={1000}
                        speed={12}
                    />

                    {/* ── Stats ── */}
                    <div className="flex item-center gap-20 mb-16 border-t border-[#2d2d2d] pt-8 font-mono">
                        {/* Experience block */}
                        <div className="flex w-[190px] shrink-0 flex-col gap-1">
                            <EncryptedText
                                text="2+"
                                className="text-6xl font-bold text-[#d4d4d4]"
                                revealDelayMs={100}
                                startDelayMs={1800}
                            />
                            <TypewriterText
                                text="Years Experience"
                                tag="span"
                                className="text-md uppercase tracking-widest text-[#858585]"
                                delay={1800}
                                speed={50}
                            />
                        </div>
                        {/* Projects block */}
                        <div className="flex w-[200px] shrink-0 flex-col gap-1">
                            <EncryptedText
                                text="10+"
                                className="text-6xl font-bold text-[#d4d4d4]"
                                revealDelayMs={100}
                                startDelayMs={2100}
                            />
                            <TypewriterText
                                text="Projects Delivered"
                                tag="span"
                                className="text-md uppercase tracking-widest text-[#858585]"
                                delay={2100}
                                speed={50}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
