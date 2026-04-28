'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import GreenDot from '../../components/ui/GreenDot'
import LiveClock from '../../components/ui/LiveClock'
import Logo from '../../../public/images/logo.png'

const tabs = [
  { label: 'ABOUT.MD',   id: 'm-hero'      },
  { label: 'WORK.DONE',  id: 'm-projects'  },
  { label: 'TECH.STACK', id: 'm-techstack' },
  { label: 'CONTACT.ME', id: 'm-contact'   },
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
            <span style={{ color: '#4ec9b0', fontSize: '8px' }}>◆</span>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}