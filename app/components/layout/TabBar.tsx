'use client'

import { X } from 'lucide-react'
import GreenDot from '../../components/ui/GreenDot'
import LiveClock from '../../components/ui/LiveClock'
import Image from 'next/image'
import { useActiveFile } from '@/app/context/ActiveFileContext'

const MATERIAL_ICONS_BASE = 'https://cdn.jsdelivr.net/gh/material-extensions/vscode-material-icon-theme@main/icons'

const materialIconUrls: Record<string, string> = {
    codeowner: `${MATERIAL_ICONS_BASE}/codeowners.svg`,
    folder_project: `${MATERIAL_ICONS_BASE}/folder-project.svg`,
    folder_controller: `${MATERIAL_ICONS_BASE}/folder-controller.svg`,
    folder_contract: `${MATERIAL_ICONS_BASE}/folder-contract.svg`,
}

const tabs = [
    { label: 'About.md', href: '#hero', icon: <Image src={materialIconUrls.codeowner} alt="About" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" unoptimized /> },
    // { label: 'EXPERIENCE.LOG', href: '#experience', icon: <BriefcaseBusiness size={9} />, color: '#6a9955' },
    { label: 'Work.done', href: '#projects', icon: <Image src={materialIconUrls.folder_project} alt="Work" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" unoptimized /> },
    { label: 'Tech.stack', href: '#techstack', icon: <Image src={materialIconUrls.folder_controller} alt="Tech" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" unoptimized /> },
    { label: 'Contact.me', href: '#contact', icon: <Image src={materialIconUrls.folder_contract} alt="Contact" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" unoptimized /> },
]

export default function TabBar() {
    // ← shared context instead of local state
    const { activeTab, setByTab } = useActiveFile()

    const scrollTo = (href: string, index: number) => {
        setByTab(index)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="w-full h-9 bg-[#0E0E0E] border-b border-[#827a7a4d] flex items-center justify-between">

            {/* Tabs */}
            <div className="flex items-center h-full overflow-x-auto scrollbar-hide">
                {tabs.map((tab, i) => (
                    <button
                        key={tab.label}
                        onClick={() => scrollTo(tab.href, i)}
                        className={`
              flex items-center gap-2 h-full px-4 text-[11px] border-r border-[#1e1e1e]
              transition-colors duration-150 group whitespace-nowrap shrink-0
              ${activeTab === i
                                ? 'bg-[#1e1e1e] text-[#d4d4d4] border-t-2 border-t-[#007acc]'
                                : 'bg-[#2d2d2d] text-[#858585] hover:text-[#cccccc]'
                            }
            `}
                    >
                        <span className="text-[9px]">{tab.icon}</span>
                        {tab.label}
                        <X
                            size={11}
                            strokeWidth={1.5}
                            className="text-[#858585] opacity-0 group-hover:opacity-100 transition-opacity ml-1"
                        />
                    </button>
                ))}
            </div>

            {/* Right: open to work + clock */}
            <div className="flex items-center gap-3 px-4 shrink-0">
                <div className="flex items-center gap-2">
                    <div className='flex items-baseline gap-2'>
                        <GreenDot />
                        <span className="text-[#4ec9b0] text-[11px] font-medium whitespace-nowrap">
                            Open to work
                        </span>
                    </div>
                    <span className="text-[#454545] text-xs">|</span>
                    <span className="text-[#d4d4d4] text-xs">
                        Kadawatha, Sri Lanka
                    </span>
                </div>
                <span className="text-[#454545] text-xs">●</span>
                <LiveClock />
            </div>
        </div>
    )
}