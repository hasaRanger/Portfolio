'use client'

import { Files, Search, FileText, ChevronDown, ChevronRight, Info, FolderRoot, CodeXml, CircleUserRound, BriefcaseBusiness } from 'lucide-react'
import Logo from '../../../public/images/logo.png'
import { useState } from 'react'
import Image from 'next/image'
import { useActiveFile, type FileLabel } from '@/app/context/ActiveFileContext'

// ─── Types ────────────────────────────────────────────────────────────────────
interface SocialLink {
    name: string
    handle: string
    href: string
    bg: string
    icon: React.ReactNode
    devicon?: string
    gradient?: string
    border?: string
}

const MATERIAL_ICONS_BASE = 'https://cdn.jsdelivr.net/gh/material-extensions/vscode-material-icon-theme@main/icons'
const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const materialIconUrls: Record<string, string> = {
    codeowner: `${MATERIAL_ICONS_BASE}/codeowners.svg`,
    folder_project: `${MATERIAL_ICONS_BASE}/folder-project.svg`,
    folder_controller: `${MATERIAL_ICONS_BASE}/folder-controller.svg`,
    folder_contract: `${MATERIAL_ICONS_BASE}/folder-contract.svg`,
}

const deviconUrls: Record<string, string> = {
    github: `${DEVICON_BASE}/github/github-original.svg`,
    gitlab: `${DEVICON_BASE}/gitlab/gitlab-original.svg`,
    linkedin: `${DEVICON_BASE}/linkedin/linkedin-original.svg`,
    facebook: `${DEVICON_BASE}/facebook/facebook-original.svg`,
    twitter: `${DEVICON_BASE}/twitter/twitter-original.svg`,
    discord: `${DEVICON_BASE}/discord/discord-plain.svg`,
    npm: `${DEVICON_BASE}/npm/npm-original.svg`,
}

function DeviconOrFallback({ devicon, fallback, name }: { devicon?: string, fallback: React.ReactNode, name: string }) {
    const [error, setError] = useState(false)
    
    if (!devicon || error) return <>{fallback}</>
    
    const src = deviconUrls[devicon] || `${DEVICON_BASE}/${devicon}/${devicon}-original.svg`
        
    return (
        <Image
            src={src}
            alt={name}
            width={18}
            height={18}
            className="w-4.5 h-4.5 object-contain shrink-0"
            onError={() => setError(true)}
            unoptimized
        />
    )
}

// ─── Nav icons ────────────────────────────────────────────────────────────────
const navIcons = [
    { icon: Files, label: 'Explorer' },
    { icon: Search, label: 'Find Me' },
]

// ─── Explorer items ────────────────────────────────────────────────────────────
const explorerItems: { label: FileLabel; href: string; color: string; icon: React.ReactNode }[] = [
    { label: 'About.md', href: '#hero', color: '#4ec9b0', icon: <Image src={materialIconUrls.codeowner} alt="Codeowner" width={18} height={18} className="w-4.5 h-4.5 object-contain shrink-0" /> },
    // { label: 'Experience.log', href: '#experience', color: '#6a9955', icon: <BriefcaseBusiness size={14} /> },
    { label: 'Work.done', href: '#projects', color: '#569cd6', icon: <Image src={materialIconUrls.folder_project} alt="Folder Project" width={18} height={18} className="w-4.5 h-4.5 object-contain shrink-0" /> },
    { label: 'Tech.stack', href: '#techstack', color: '#c586c0', icon: <Image src={materialIconUrls.folder_controller} alt="Folder Controller" width={18} height={18} className="w-4.5 h-4.5 object-contain shrink-0" /> },
    { label: 'Contact.me', href: '#contact', color: '#ce9178', icon: <Image src={materialIconUrls.folder_contract} alt="Folder Contract" width={18} height={18} className="w-4.5 h-4.5 object-contain shrink-0" /> },
]

// ─── Social links ──────────────────────────────────────────────────────────────
const socialGroups: { title: string; links: SocialLink[] }[] = [
    {
        title: 'Dev & Code',
        links: [
            {
                name: 'GitHub',
                handle: '@hasaRanger',
                href: 'https://github.com/hasaRanger',
                bg: '#ffffff',
                devicon: 'github',
                icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
</svg>
                ),
            },
            {
                name: 'GitLab',
                handle: '@Nadeesha2004',
                href: 'https://gitlab.com/Nadeesha2004',
                bg: '#24292e',
                devicon: 'gitlab',
                icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        {/* Full shape - GitLab Orange */}
                        <path d="M12 22.13L16.29 9.12H7.71L12 22.13z" fill="#FC6D26" />
                        {/* Left wing - GitLab Red */}
                        <path d="M12 22.13L7.71 9.12H2.09L12 22.13z" fill="#E24329" />
                        {/* Right wing - GitLab Red */}
                        <path d="M12 22.13L16.29 9.12H21.91L12 22.13z" fill="#E24329" />
                        {/* Far left - GitLab Light Orange */}
                        <path d="M2.09 9.12L.43 14.39a1.07 1.07 0 00.39 1.2L12 22.13 2.09 9.12z" fill="#FC6D26" />
                        {/* Far left tail */}
                        <path d="M2.09 9.12H7.71L5.27 1.61a.54.54 0 00-1.03 0L2.09 9.12z" fill="#E24329" />
                        {/* Far right - GitLab Light Orange */}
                        <path d="M21.91 9.12L23.57 14.39a1.07 1.07 0 01-.39 1.2L12 22.13l9.91-13.01z" fill="#FC6D26" />
                        {/* Far right tail */}
                        <path d="M21.91 9.12H16.29l2.44-7.51a.54.54 0 011.03 0l2.15 7.51z" fill="#E24329" />
                    </svg>
                ),
            },
            {
                name: 'LinkedIn',
                handle: 'linkedin.com/in/Nadeesha Hasaranga',
                href: 'https://www.linkedin.com/in/nadeesha-hasaranga?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
                bg: '#0a66c2',
                devicon: 'linkedin',
                icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                ),
            },
            {
                name: 'Dev.to',
                handle: 'dev.to/hasaranger',
                href: 'https://dev.to/hasaranger',
                bg: '#0a0a0a',
                border: '#333',
                icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                    </svg>
                ),
            },
            {
                name: 'Hashnode',
                handle: 'hashnode.com/@hasaranger',
                href: 'https://hashnode.com/@hasaranger',
                bg: '#2563EB',
                icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.982 13.281a3.974 3.974 0 010-2.562L9.6 2.982a3.974 3.974 0 012.796-1.164h.008a3.974 3.974 0 012.796 1.164l7.618 7.737a3.974 3.974 0 010 2.562L15.2 21.018a3.974 3.974 0 01-2.796 1.164h-.008a3.974 3.974 0 01-2.796-1.164L1.982 13.28zm8.54.702a1.857 1.857 0 102.624-2.624 1.857 1.857 0 00-2.624 2.624z" />
                    </svg>
                ),
            }, 
            {
                name: 'NPM',
                handle: 'npmjs.com/nadeesha2004',
                href: 'https://www.npmjs.com/~nadeesha2004',
                bg: '#CB3837',
                devicon: 'npm',
                icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 16v2H3v-2h18zm0-3v2H3v-2h18zm0-3v2H3v-2h18zm0-3v2H3v-2h18z" />
                    </svg>
                ),  
            },
        ],
    },
    {
        title: 'Community',
        links: [
            {
                name: 'Facebook',
                handle: '@NadeeshaHasaranga',
                href: 'https://www.facebook.com/nadeesha.kodithuwakku.393',
                bg: '#1877F2',
                devicon: 'facebook',
                icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                    </svg>
                ),
            },
            {
                name: 'Instagram',
                handle: '@nadeesha.has',
                href: 'https://www.instagram.com/nadeesha.has/',
                bg: '#000',
                gradient: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                ),
            },
            {
                name: 'X (Twitter)',
                handle: '@NadeeshaHasara2',
                href: 'https://x.com/NadeeshaHasara2',
                bg: '#fff',
                devicon: 'twitter',
                icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                ),
            },
            {
                name: 'Discord',
                handle: 'nadeeshahasaranga',
                href: '#',
                bg: '#5865f2',
                devicon: 'discord',
                icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                ),
            },
            {
                name: 'Email',
                handle: 'hasaranganadeesha2004@gmail.com',
                href: 'mailto:hasaranganadeesha2004@gmail.com',
                bg: '#ea4335',
                icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <polyline points="2,4 12,13 22,4" />
                    </svg>
                ),
            },
        ],
    },
]

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Sidebar() {
    const [explorerOpen, setExplorerOpen] = useState(true)
    const [activeIcon, setActiveIcon] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')

    // ← shared context instead of local state
    const { activeFile, setByFile } = useActiveFile()

    const scrollTo = (href: string, label: FileLabel) => {
        setByFile(label)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const filterQuery = searchQuery.toLowerCase()
    const filteredGroups = socialGroups
        .map(group => ({
            ...group,
            links: group.links.filter(
                l =>
                    l.name.toLowerCase().includes(filterQuery) ||
                    l.handle.toLowerCase().includes(filterQuery)
            ),
        }))
        .filter(group => group.links.length > 0)

    return (
        <div className="w-full h-full flex">

            {/* ── Icon strip — 48 px ─────────────────────────────────────────── */}
            <aside className="w-12 shrink-0 bg-[#262626] flex flex-col items-center justify-between py-2 border-r border-[#827a7a4d]">
                <div className="flex flex-col items-center gap-2">

                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('#hero', 'About.md')}
                        className="w-10 h-10 flex items-center justify-center text-[#cccccc] hover:text-white"
                    >
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={24}
                            height={24}
                            className="rounded-full object-cover"
                        />
                    </button>

                    {/* Nav icons */}
                    {navIcons.map(({ icon: Icon, label }, idx) => (
                        <button
                            key={label}
                            title={label}
                            onClick={() => setActiveIcon(idx)}
                            className={`
                                w-10 h-10 flex items-center justify-center transition-colors relative group
                                ${activeIcon === idx
                                    ? 'text-[#cccccc]'
                                    : 'text-[#858585] hover:text-[#cccccc]'
                                }
                            `}
                        >
                            {activeIcon === idx && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#cccccc] rounded-r" />
                            )}
                            <Icon size={22} strokeWidth={1.5} />
                            <span className="absolute left-full ml-2 px-2 py-1 bg-[#1e1e1e] border border-[#454545] text-[#cccccc] text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-60">
                                {label}
                            </span>
                        </button>
                    ))}
                </div>
            </aside>

            {/* ── Panel area ─────────────────────────────────────────────────── */}
            <div className="flex-1 bg-[#262626] border-r border-[#827a7a4d] flex flex-col overflow-hidden">

                {/* ── EXPLORER panel ──────────────────────────────────────────── */}
                {activeIcon === 0 && (
                    <div className="flex flex-col h-full">
                        <div className="flex-1 overflow-y-auto">
                            <span className="text-[#bbbbbb] text-[10px] font-medium tracking-widest uppercase pt-3 px-3 mb-3 block">
                                Explorer
                            </span>

                            <button
                                onClick={() => setExplorerOpen(o => !o)}
                                className="flex items-center gap-1 w-full text-left hover:bg-[#2a2d2e] transition-colors px-2 mb-2"
                            >
                                {explorerOpen
                                    ? <ChevronDown size={13} className="text-[#cccccc] shrink-0" />
                                    : <ChevronRight size={13} className="text-[#cccccc] shrink-0" />
                                }
                                <span className="text-[#cccccc] text-[11px] font-semibold uppercase tracking-wide truncate">
                                    Portfolio_Root
                                </span>
                            </button>

                            {explorerOpen && (
                                <div className="flex flex-col gap-2 pl-7 pr-2">
                                    {explorerItems.map(({ label, href, color, icon }) => (
                                        <button
                                            key={label}
                                            onClick={() => scrollTo(href, label)}
                                            className={`
                                                flex items-center gap-2 text-[12px] text-left w-full truncate rounded
                                                px-2 py-0.5 transition-colors duration-100
                                                ${activeFile === label
                                                    ? 'bg-[#37373d] text-[#cccccc]'
                                                    : 'text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]'
                                                }
                                            `}
                                        >
                                            <span style={{ color }} className="text-[9px] shrink-0">{icon}</span>
                                            <span className="truncate">{label}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Resume footer */}
                        <div className="shrink-0 mb-5 mx-3 border-t border-[#1e1e1e] pt-3">
                            <a
                                href="https://drive.google.com/file/d/1onJe69GrtD8x7I6Ln3s5_yjsNWQHdkpO/view?usp=sharing"
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full py-1.5 px-2 bg-[#2d2d2d] hover:bg-[#3e3e3e] border border-[#454545] rounded text-[#cccccc] text-[11px] transition-colors"
                            >
                                <FileText size={14} strokeWidth={1.5} />
                                RESUME.PDF
                            </a>
                        </div>
                    </div>
                )}

                {/* ── SEARCH / SOCIAL panel ───────────────────────────────────── */}
                {activeIcon === 1 && (
                    <div className="flex flex-col h-full">
                        <div className="px-3 pt-3 pb-2 shrink-0">
                            <span className="text-[#bbbbbb] text-[10px] font-medium tracking-widest uppercase block mb-2">
                                Find Me On
                            </span>
                            <div className="flex items-center gap-1.5 bg-[#3c3c3c] border border-[#555] rounded px-2 py-1">
                                <Search size={12} className="text-[#858585] shrink-0" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    placeholder="Search platforms..."
                                    className="bg-transparent border-none outline-none text-[#cccccc] text-[12px] w-full placeholder:text-[#555]"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {filteredGroups.length === 0 ? (
                                <p className="text-[#555] text-[11px] px-3 py-4">No platforms found.</p>
                            ) : (
                                filteredGroups.map(group => (
                                    <div key={group.title}>
                                        <span className="text-[#555] text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 block">
                                            {group.title}
                                        </span>
                                        <div className="flex flex-col gap-0.5 px-2">
                                            {group.links.map(link => (
                                                <a
                                                    key={link.name}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2.5 px-2 py-1.5 rounded hover:bg-[#2a2d2e] transition-colors group"
                                                >
                                                    <div
                                                        className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 text-white"
                                                        style={{
                                                            background: link.gradient ?? link.bg,
                                                            border: link.border ? `1px solid ${link.border}` : 'none',
                                                        }}
                                                    >
                                                        <DeviconOrFallback devicon={link.devicon} fallback={link.icon} name={link.name} />
                                                    </div>
                                                    <div className="flex flex-col min-w-0">
                                                        <span className="text-[12px] text-[#cccccc] font-medium leading-tight group-hover:text-white transition-colors">
                                                            {link.name}
                                                        </span>
                                                        <span className="text-[10px] text-[#858585] truncate">
                                                            {link.handle}
                                                        </span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}