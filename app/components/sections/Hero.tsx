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
            <div className="flex flex-col items-center md:flex-row gap-8 md:gap-16 mb-12">

                {/* Photo */}
                <motion.div
                    className="relative shrink-0 max-w-full"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                >
                    <div className="w-[280px] sm:w-[340px] md:w-[380px] h-[350px] sm:h-[420px] md:h-[480px] relative overflow-hidden border border-[#3e3e3e]">
                        <Portrait />
                    </div>
                    {/* FULLSTACK_DEV badge */}
                    <div
                        className="relative -mt-4 mx-auto z-10 w-[90%] max-w-[320px] sm:max-w-[340px]"
                        style={{
                            height: '32px',
                            backgroundColor: '#007acc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <EncryptedText
                            text="Fullstack_Dev"
                            className="text-black text-md font-semibold tracking-widest uppercase"
                            startDelayMs={500}
                            revealDelayMs={100}
                        />
                    </div>
                </motion.div>

                {/* Name + bio + socials */}
                <div className="flex flex-col justify-center gap-6 md:gap-8 text-center md:text-left min-h-fit md:min-h-[400px] w-full">

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
                        className="text-sm md:text-base text-[#858585] leading-relaxed md:max-w-xl min-h-[60px]"
                        delay={1000}
                        speed={12}
                    />

                    {/* ── Stats ── */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-center md:justify-start gap-8 sm:gap-12 md:gap-16 border-t border-[#2d2d2d] pt-6 font-mono">
                        {/* Experience block */}
                        <div className="flex w-[160px] sm:w-[180px] shrink-0 flex-col gap-1 text-center md:text-left">
                            <EncryptedText
                                text="2+"
                                className="text-4xl sm:text-6xl font-bold text-[#d4d4d4]"
                                revealDelayMs={100}
                                startDelayMs={1800}
                            />
                            <TypewriterText
                                text="Years Experience"
                                tag="span"
                                className="text-xs sm:text-sm uppercase tracking-widest text-[#858585]"
                                delay={1800}
                                speed={50}
                            />
                        </div>
                        {/* Projects block */}
                        <div className="flex w-[160px] sm:w-[180px] shrink-0 flex-col gap-1 text-center md:text-left">
                            <EncryptedText
                                text="10+"
                                className="text-4xl sm:text-6xl font-bold text-[#d4d4d4]"
                                revealDelayMs={100}
                                startDelayMs={2100}
                            />
                            <TypewriterText
                                text="Projects Delivered"
                                tag="span"
                                className="text-xs sm:text-sm uppercase tracking-widest text-[#858585]"
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
