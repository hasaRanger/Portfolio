'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useTypewriter } from '../../hooks/useTypewriter'

interface Props {
    text: string
    className?: string
    delay?: number
    speed?: number
    tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
    showCursor?: boolean
}

export default function TypewriterText({
    text,
    className = '',
    delay = 0,
    speed = 35,
    tag: Tag = 'span',
    showCursor = false,
}: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '0px' })
    const { displayed, isDone } = useTypewriter({ text, speed, delay, isInView })

    return (
        <Tag ref={ref} className={className}>
            {displayed}
            {showCursor && (
                <span
                    className={`cursor-blink ${isDone ? 'animate-blink' : ''
                        } text-[#569cd6]`}
                >
                    _
                </span>
            )}
        </Tag>
    )
}