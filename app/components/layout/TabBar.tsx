'use client'

import { X } from 'lucide-react'
import GreenDot from '../../components/ui/GreenDot'
import LiveClock from '../../components/ui/LiveClock'
import Image from 'next/image'
import { useActiveFile } from '@/app/context/ActiveFileContext'

import AppIcon from '../../components/ui/AppIcon'

const tabs = [
    { label: 'About.md', href: '#hero', icon: <AppIcon name="codeowner" size={14} className="w-3.5 h-3.5" /> },
    { label: 'Work.done', href: '#projects', icon: <AppIcon name="folder_project" size={14} className="w-3.5 h-3.5" /> },
    { label: 'Tech.stack', href: '#techstack', icon: <AppIcon name="folder_controller" size={14} className="w-3.5 h-3.5" /> },
    { label: 'Contact.me', href: '#contact', icon: <AppIcon name="folder_contract" size={14} className="w-3.5 h-3.5" /> },
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