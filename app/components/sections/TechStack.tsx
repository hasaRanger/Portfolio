'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import TypewriterText from '../../components/ui/TypewriterText'
import { techStack } from '../../data/techstack'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const iconUrl = (icon: string) => {
  const overrides: Record<string, string> = {
    nextjs:       `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
    vite:         `${DEVICON_BASE}/vite/vite-original.svg`,
    tailwindcss:  `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
    express:      `${DEVICON_BASE}/express/express-original.svg`,
    spring:       `${DEVICON_BASE}/spring/spring-original.svg`,
    java:         `${DEVICON_BASE}/java/java-original.svg`,
    jaxrs:         `${DEVICON_BASE}/java/java-plain.svg`,
    mariadb:      `${DEVICON_BASE}/mariadb/mariadb-original.svg`,
    postman:      `${DEVICON_BASE}/postman/postman-original.svg`,
    vercel:       `${DEVICON_BASE}/vercel/vercel-original.svg`,
    digitalocean: `${DEVICON_BASE}/digitalocean/digitalocean-original.svg`,
    canva:        `${DEVICON_BASE}/canva/canva-original.svg`,
    photoshop:    `${DEVICON_BASE}/photoshop/photoshop-original.svg`,
    premierpro:   `${DEVICON_BASE}/premierepro/premierepro-original.svg`,
    linux:        `${DEVICON_BASE}/linux/linux-original.svg`,
    git:          `${DEVICON_BASE}/git/git-original.svg`,
  }
  return overrides[icon] ?? `${DEVICON_BASE}/${icon}/${icon}-original.svg`
}

function TechItem({ name, icon, delay }: { name: string; icon: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 12px',
        backgroundColor: '#252526',
        border: '1px solid #2d2d2d',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
      }}
    >
      <Image
        src={iconUrl(icon)}
        alt={name}
        width={16}
        height={16}
        style={{ width: '16px', height: '16px', objectFit: 'contain', flexShrink: 0 }}
        unoptimized
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
      <span style={{ fontSize: '11px', color: '#9cdcfe', whiteSpace: 'nowrap' }}>
        {name}
      </span>
    </div>
  )
}

function TechGroup({
  title,
  items,
  baseDelay,
}: {
  title: string
  items: { name: string; icon: string }[]
  baseDelay: number
}) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <p
        style={{
          fontSize: '11px',
          color: '#858585',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        {title}
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '8px',
        }}
      >
        {items.map((item, i) => (
          <TechItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            delay={baseDelay + i * 0.05}
          />
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="techstack" style={{ paddingTop: '64px', paddingBottom: '32px', borderTop: '1px solid #2d2d2d' }}>

      {/* Section heading */}
      <div style={{ marginBottom: '32px' }}>
        <TypewriterText
          text="export"
          tag="span"
          className="text-[12px] text-[#c586c0] mr-3"
          speed={50}
        />
        <TypewriterText
          text="TECH_STACK"
          tag="span"
          className="text-lg font-bold text-[#4ec9b0] tracking-wide"
          delay={200}
          speed={50}
        />
      </div>

      <TechGroup title="Programming Languages" items={techStack.languages}  baseDelay={0}    />
      <TechGroup title="Frontend Development" items={techStack.frontend}  baseDelay={0.1}    />
      <TechGroup title="Backend Development"  items={techStack.backend}   baseDelay={0.15}  />
      <TechGroup title="Database"             items={techStack.database}  baseDelay={0.2} />
      <TechGroup title="Tools & Other"        items={techStack.tools}     baseDelay={0.25}  />

    </section>
  )
}