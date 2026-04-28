'use client'

import { useState, useEffect, useRef } from 'react'

interface UseTypewriterOptions {
  text: string
  speed?: number
  delay?: number
  isInView: boolean
}

export function useTypewriter({
  text,
  speed = 35,
  delay = 0,
  isInView,
}: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState('')
  const [isDone, setIsDone] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const indexRef = useRef(0)

  useEffect(() => {
    if (!isInView) return

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        indexRef.current += 1
        setDisplayed(text.slice(0, indexRef.current))

        if (indexRef.current >= text.length) {
          clearInterval(intervalRef.current!)
          setIsDone(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeoutRef.current!)
      clearInterval(intervalRef.current!)
    }
  }, [isInView, text, speed, delay])

  return { displayed, isDone }
}