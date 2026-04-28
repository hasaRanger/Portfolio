'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import TypewriterText from '../../components/ui/TypewriterText'
import { projects } from '../../data/projects'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <div
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
                border: '1px solid #2d2d2d',
                padding: '32px',
            }}
        >
            {/* Project image */}
            <div
                style={{
                    width: '100%',
                    height: '180px',
                    backgroundColor: '#2d2d2d',
                    border: '1px solid #3e3e3e',
                    marginBottom: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Watermark text — shown when no image */}
                <span
                    style={{
                        fontSize: '11px',
                        letterSpacing: '0.4em',
                        color: '#3e3e3e',
                        textTransform: 'uppercase',
                        userSelect: 'none',
                    }}
                >
                    SAFE API WORK
                </span>

                {/* Status badge */}
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        padding: '2px 8px',
                        fontSize: '9px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        backgroundColor:
                            project.status === 'live'
                                ? '#0e4429'
                                : project.status === 'source available'
                                    ? '#0b2f4f'
                                    : '#3d2e00',
                        color:
                            project.status === 'live'
                                ? '#3fb950'
                                : project.status === 'source available'
                                    ? '#58a6ff'
                                    : '#d29922',
                        border: `1px solid ${project.status === 'live'
                            ? '#238636'
                            : project.status === 'source available'
                                ? '#1f6feb'
                                : '#9e6a03'
                            }`,
                        borderRadius: '2px',
                    }}
                >
                    {project.status === 'live' ? '● LIVE' : project.status === 'source available' ? '◎ SA' : '◐ WIP'}
                </div>
            </div>

            {/* Title row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
                <TypewriterText
                    text={project.title}
                    tag="h3"
                    className="text-base font-bold text-[#d4d4d4]"
                    delay={index * 100}
                    speed={30}
                />
                <a
                    href={project.live ?? project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        border: '1px solid #3e3e3e',
                        color: '#858585',
                        flexShrink: 0,
                        marginLeft: '12px',
                        transition: 'color 0.15s, border-color 0.15s',
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.color = '#cccccc'
                            ; (e.currentTarget as HTMLElement).style.borderColor = '#555'
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.color = '#858585'
                            ; (e.currentTarget as HTMLElement).style.borderColor = '#3e3e3e'
                    }}
                >
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                </a>
            </div>

            {/* Description */}
            <TypewriterText
                text={project.description}
                tag="p"
                className="text-sm text-[#858585] leading-relaxed mb-3.5"
                delay={index * 100 + 200}
                speed={8}
            />

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map((tag, tagIndex) => (
                    <span
                        key={tag}
                        style={{
                            padding: '2px 10px',
                            fontSize: '11px',
                            backgroundColor: '#2d2d2d',
                            border: '1px solid #3e3e3e',
                            borderRadius: '2px',
                            fontFamily: 'var(--font-mono)',
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
            </div>
        </div>
    )
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
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
            }}>
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>

        </section>
    )
}