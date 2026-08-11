'use client'

import React, { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import TypewriterText from '../../components/ui/TypewriterText'
import { projects } from '../../data/projects'
import Image from 'next/image'

const MATERIAL_ICONS_BASE = 'https://cdn.jsdelivr.net/gh/material-extensions/vscode-material-icon-theme@main/icons'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const iconUrl = (icon: string) => {
  const overrides: Record<string, string> = {
    express:        `${DEVICON_BASE}/express/express-original.svg`,
    spring:         `${DEVICON_BASE}/spring/spring-original.svg`,
    java:           `${DEVICON_BASE}/java/java-original.svg`,
  }
  return overrides[icon] ?? `${DEVICON_BASE}/${icon}/${icon}-original.svg`
}

const TAG_ICON_MAP: Record<string, { devicon?: string; simpleicon?: {slug: string, color?: string} }> = {
  'React': { devicon: 'react' },
  'Java': { devicon: 'java' },
  'Springboot': { devicon: 'spring' },
  'MariaDB': { devicon: 'mariadb' },
  'Vue.js': { devicon: 'vuejs' },
  'Laravel': { devicon: 'laravel' },
  'MySQL': { devicon: 'mysql' },
  'Stripe': { simpleicon: { slug: 'stripe' } },
  'Next.js': { devicon: 'nextjs' },
  'BetterAuth': { simpleicon: { slug: 'betterauth', color: 'white' } },
  'Tailwind CSS': { devicon: 'tailwindcss' },
  'MongoDB': { devicon: 'mongodb' },
  'Express.js': { devicon: 'express' },
  'Node.js': { devicon: 'nodejs' },
  'Digital Ocean': { devicon: 'digitalocean' },
}

function getTagIconUrl(tag: string): string {
  const config = TAG_ICON_MAP[tag]
  if (config?.simpleicon) {
    return config.simpleicon.color
      ? `https://cdn.simpleicons.org/${config.simpleicon.slug}/${config.simpleicon.color}`
      : `https://cdn.simpleicons.org/${config.simpleicon.slug}`
  }
  if (config?.devicon) {
    return iconUrl(config.devicon)
  }
  const slug = tag.toLowerCase().replace(/\.js$/, 'dotjs').replace(/[\s\.\-]/g, '')
  return `https://cdn.simpleicons.org/${slug}`
}

function ProjectTechTag({ tag, index, tagIndex }: { tag: string; index: number; tagIndex: number }) {
  const [hasError, setHasError] = useState(false)
  const iconUrl = getTagIconUrl(tag)

  return (
    <span
      title={tag}
      style={{
        width: "fit-content",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: hasError ? "2px 10px" : "6px 8px",
        fontSize: "11px",
        backgroundColor: "#252526",
        border: "1px solid #3e3e3e",
        borderRadius: "2px",
        fontFamily: "var(--font-mono)",
      }}
    >
      {!hasError ? (
        <Image
          src={iconUrl}
          alt={tag}
          width={16}
          height={16}
          style={{ width: '16px', height: '16px', objectFit: 'contain', flexShrink: 0 }}
          unoptimized
          onError={() => setHasError(true)}
        />
      ) : (
        <TypewriterText
          text={tag}
          tag="span"
          className="text-[#9cdcfe]"
          delay={index * 100 + 400 + tagIndex * 50}
          speed={15}
        />
      )}
    </span>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '0px' })

    return (
      <div
        ref={ref}
        className="flex flex-col gap-5 md:flex-row"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(24px)",
          transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
          border: "1px solid #2d2d2d",
          padding: "clamp(16px, 5vw, 32px)",
        }}
      >
        <div className="flex flex-col gap-5 md:mr-6 w-full md:w-95 lg:w-100 shrink-0">
          {/* Project image and status */}
          <div
            className="w-full shrink-0"
            style={{
              height: "250px",
              backgroundColor: "#2d2d2d",
              border: "1px solid #3e3e3e",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Render image if available */}
            {project.image && typeof project.image === "string" ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            ) : project.image ? (
              React.createElement(project.image)
            ) : null}

            {/* Watermark text — shown when no image */}
            {!project.image && (
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.4em",
                  color: "#3e3e3e",
                  textTransform: "uppercase",
                  userSelect: "none",
                }}
              >
                SAFE API WORK
              </span>
            )}

            {/* Status badge */}
            <div
              title={
                project.status === "live"
                  ? "Live"
                  : project.status === "source available"
                    ? "Source Available"
                    : "Work in Progress"
              }
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "2px 8px",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                backgroundColor:
                  project.status === "live"
                    ? "#0e4429"
                    : project.status === "source available"
                      ? "#0b2f4f"
                      : "#3d2e00",
                color:
                  project.status === "live"
                    ? "#3fb950"
                    : project.status === "source available"
                      ? "#58a6ff"
                      : "#d29922",
                border: `1px solid ${
                  project.status === "live"
                    ? "#238636"
                    : project.status === "source available"
                      ? "#1f6feb"
                      : "#9e6a03"
                }`,
                borderRadius: "2px",
              }}
            >
              {project.status === "live"
                ? "● LIVE"
                : project.status === "source available"
                  ? "◎ SA"
                  : "◐ WIP"}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 w-full">
            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tags.map((tag, tagIndex) => (
                  <ProjectTechTag
                    key={tag}
                    tag={tag}
                    index={index}
                    tagIndex={tagIndex}
                  />
                ))}
            </div>
            <a
              title={project.status === "live" ? "View Project" : "View Source"}
              href={project.live ?? project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                border: "1px solid #3e3e3e",
                color: "#858585",
                flexShrink: 0,
                marginLeft: "12px",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#cccccc";
                (e.currentTarget as HTMLElement).style.borderColor = "#555";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#858585";
                (e.currentTarget as HTMLElement).style.borderColor = "#3e3e3e";
              }}
            >
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </div>
          
        </div>

        {/* Project details */}
        <div className="min-w-0 flex-1">
          {/* Title row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <TypewriterText
              text={project.title}
              tag="h3"
              className="text-base font-bold text-[#d4d4d4]"
              delay={index * 100}
              speed={30}
            />
            {/* <a
              title={project.status === "live" ? "View Project" : "View Source"}
              href={project.live ?? project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                border: "1px solid #3e3e3e",
                color: "#858585",
                flexShrink: 0,
                marginLeft: "12px",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#cccccc";
                (e.currentTarget as HTMLElement).style.borderColor = "#555";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#858585";
                (e.currentTarget as HTMLElement).style.borderColor = "#3e3e3e";
              }}
            >
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a> */}
          </div>

          {/* Description */}
          <TypewriterText
            text={project.description}
            tag="p"
            className="text-sm text-[#858585] leading-relaxed mb-3.5"
            delay={index * 100 + 200}
            speed={8}
          />

          {/* Points */}
          {project.points && (
            <div style={{ marginBottom: "16px" }}>
              <TypewriterText
                text={project.points.trim()}
                tag="p"
                className="whitespace-pre-line text-sm text-[#858585] leading-relaxed"
                delay={index * 100 + 1200}
                speed={8}
              />
            </div>
          )}

          {/* Tags */}
          {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                style={{
                  padding: "2px 10px",
                  fontSize: "11px",
                  backgroundColor: "#2d2d2d",
                  border: "1px solid #3e3e3e",
                  borderRadius: "2px",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <TypewriterText
                  text={tag}
                  tag="span"
                  className="text-[#9cdcfe]"
                  delay={index * 100 + 400 + tagIndex * 50}
                  speed={15}
                />
              </span>
            ))}
          </div> */}
        </div>
      </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" style={{ paddingTop: '64px', paddingBottom: '32px' }}>

            {/* Section heading */}
            <div style={{ marginBottom: '8px' }}>
                <TypewriterText
                    text="class"
                    tag="span"
                    className="text-[12px] text-[#569cd6] mr-3"
                    speed={40}
                />
                <TypewriterText
                    text="FEATURED_PROJECTS"
                    tag="span"
                    className="text-lg font-bold text-[#4ec9b0] tracking-wide"
                    delay={200}
                    speed={40}
                />
            </div>

            {/* View all link */}
            <div style={{ marginBottom: '32px' }}>
                <a
                    href="https://github.com/hasaRanger"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <TypewriterText
                        text="VIEW ALL WORKS →"
                        tag="span"
                        className="text-[11px] text-[#569cd6] letter-spacing-[0.05em]"
                        speed={40}
                    />
                </a>
            </div>

            {/* Project list */}
            <div
                className="flex flex-col gap-6 md:gap-8"
            >
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>

        </section>
    )
}
