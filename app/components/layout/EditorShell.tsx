'use client'

import { useEffect, useRef, useState } from 'react'
import Hero from '../../components/sections/Hero'
import Projects from '../../components/sections/Projects'
import TechStack from '../../components/sections/TechStack'
import Contact from '../../components/sections/Contact'

interface EditorShellProps {
  turnstileSiteKey?: string
}

const LINE_HEIGHT = 20 // must match the span lineHeight in gutter

export default function EditorShell({ turnstileSiteKey }: EditorShellProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [lineCount, setLineCount] = useState(100)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const update = () => {
      // Total scrollable content height → convert to line count
      const height = el.scrollHeight
      setLineCount(Math.ceil(height / LINE_HEIGHT) + 5) // +5 lines padding at bottom
    }

    // Measure after first paint
    update()

    // Re-measure if content changes (images load, animations complete etc)
    const ro = new ResizeObserver(update)
    ro.observe(el)

    return () => ro.disconnect()
  }, [])

  return (
    <main
      className="editor-scroll"
      style={{
        gridColumn: '2',
        gridRow: '2',
        overflowY: 'auto',
        backgroundColor: '#0E0E0E',
        display: 'flex',
        alignItems: 'flex-start', // children align to top, not stretch
      }}
    >
      {/* Dynamic line number gutter */}
      <div
        style={{
          width: '52px',
          flexShrink: 0,
          backgroundColor: '#0E0E0E',
          borderRight: '1px solid #2d2d2d',
          paddingTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingRight: '12px',
          userSelect: 'none',
          // Explicitly size to the full scrollable content height so the
          // border-right extends all the way down past the last line.
          height: `${lineCount * LINE_HEIGHT + 40}px`, // +40 matches paddingTop
          minHeight: '100%', // still fills the viewport when content is short
        }}
      >
        {Array.from({ length: lineCount }, (_, i) => (
          <span
            key={i}
            style={{
              fontSize: '12px',
              lineHeight: `${LINE_HEIGHT}px`,
              color: i === 0 ? '#858585' : '#3e3e3e',
              fontFamily: 'var(--font-mono)',
              minHeight: `${LINE_HEIGHT}px`,
              display: 'block',
            }}
          >
            {i + 1}
          </span>
        ))}
      </div>

      {/* Editor content — ref measures total height */}
      <div ref={contentRef} style={{ flex: 1, minWidth: 0 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 40px' }}>
          <Hero />
          <Projects />
          <TechStack />
          <Contact turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </main>
  )
}