'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import TypewriterText from '../../components/ui/TypewriterText'
import { techStack } from '../../data/techstack'

import AppIcon from '../../components/ui/AppIcon'

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
      <AppIcon name={icon || name} size={16} showFallbackText={false} />
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
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