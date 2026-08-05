'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import GreenDot from '../../components/ui/GreenDot'
import LiveClock from '../../components/ui/LiveClock'
import Logo from '../../../public/images/logo.png'

const MATERIAL_ICONS_BASE = 'https://cdn.jsdelivr.net/gh/material-extensions/vscode-material-icon-theme@main/icons'

const materialIconUrls: Record<string, string> = {
    codeowner: `${MATERIAL_ICONS_BASE}/codeowners.svg`,
    folder_project: `${MATERIAL_ICONS_BASE}/folder-project.svg`,
    folder_controller: `${MATERIAL_ICONS_BASE}/folder-controller.svg`,
    folder_contract: `${MATERIAL_ICONS_BASE}/folder-contract.svg`,
}

const tabs = [
  { label: 'About.md',   id: 'm-hero',      icon: <Image src={materialIconUrls.codeowner} alt="About" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" unoptimized /> },
  { label: 'Work.done',  id: 'm-projects',  icon: <Image src={materialIconUrls.folder_project} alt="Work" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" unoptimized /> },
  { label: 'Tech.stack', id: 'm-techstack', icon: <Image src={materialIconUrls.folder_controller} alt="Tech" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" unoptimized /> },
  { label: 'Contact.me', id: 'm-contact',   icon: <Image src={materialIconUrls.folder_contract} alt="Contact" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" unoptimized /> },
]

export default function MobileTabBar() {
  const [active, setActive] = useState('ABOUT.MD')

  useEffect(() => {
    const scrollParent = document.getElementById('mobile-main')
    if (!scrollParent) return

    const handleScroll = () => {
      const containerRect = scrollParent.getBoundingClientRect()

      // Walk in reverse — last section whose top edge is at or above
      // the container's top (plus a small offset) wins
      for (let i = tabs.length - 1; i >= 0; i--) {
        const el = document.getElementById(tabs[i].id)
        if (!el) continue
        const elRect = el.getBoundingClientRect()
        if (elRect.top - containerRect.top <= 80) {
          setActive(tabs[i].label)
          break
        }
      }
    }

    scrollParent.addEventListener('scroll', handleScroll, { passive: true })
    // Run once on mount to set correct initial active tab
    handleScroll()

    return () => scrollParent.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabClick = (id: string, label: string) => {
    setActive(label)

    const target = document.getElementById(id)
    const scrollParent = document.getElementById('mobile-main')
    if (!target || !scrollParent) return

    const targetRect = target.getBoundingClientRect()
    const containerRect = scrollParent.getBoundingClientRect()
    const absoluteOffset = scrollParent.scrollTop + (targetRect.top - containerRect.top)

    scrollParent.scrollTo({ top: absoluteOffset, behavior: 'smooth' })
  }

  return (
    <div style={{ backgroundColor: '#252526', borderBottom: '1px solid #1e1e1e' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 12px', height: '36px', borderBottom: '1px solid #1e1e1e',
      }}>
        <button onClick={() => handleTabClick('m-hero', 'ABOUT.MD')}>
            <Image 
            src={Logo} 
            alt="Logo" 
            height={20} 
            priority 
            className="rounded-full" 
            />
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="flex items-baseline gap-2">
            <GreenDot />
            <span className="text-[#4ec9b0] text-[10px] font-medium whitespace-nowrap">
              Open to work
            </span>
          </div>
          <span className="text-[#454545] text-[10px]">|</span>
          <LiveClock />
          <span className="text-[#454545] text-[10px]">●</span>
          <span className="text-[#d4d4d4] text-[10px]">SL</span>
        </div>
      </div>

      <div style={{ display: 'flex', overflowX: 'auto', height: '34px', scrollbarWidth: 'none' }}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabClick(tab.id, tab.label)}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              height: '100%', padding: '0 14px', fontSize: '10px',
              whiteSpace: 'nowrap', flexShrink: 0, border: 'none',
              borderRight: '1px solid #1e1e1e',
              borderTop: active === tab.label ? '2px solid #007acc' : '2px solid transparent',
              backgroundColor: active === tab.label ? '#1e1e1e' : '#2d2d2d',
              color: active === tab.label ? '#d4d4d4' : '#858585',
              cursor: 'pointer', transition: 'all 0.15s',
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}