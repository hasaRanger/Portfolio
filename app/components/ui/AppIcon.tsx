'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { getCandidateUrls } from '@/lib/icons/resolver'
import { IconProviderId } from '@/lib/icons/types'
import TypewriterText from '@/app/components/ui/TypewriterText'

interface AppIconProps {
  name: string
  size?: number
  provider?: IconProviderId
  className?: string
  showFallbackText?: boolean
}

export default function AppIcon({
  name,
  size = 16,
  provider,
  className = '',
  showFallbackText = true,
}: AppIconProps) {
  const candidates = useMemo(() => getCandidateUrls(name, provider), [name, provider])
  const [candidateIndex, setCandidateIndex] = useState(0)
  const [hasFailedAll, setHasFailedAll] = useState(false)

  const currentUrl = candidates[candidateIndex]

  const handleError = () => {
    if (candidateIndex + 1 < candidates.length) {
      setCandidateIndex((prev) => prev + 1)
    } else {
      setHasFailedAll(true)
    }
  }

  if (hasFailedAll || !currentUrl) {
    if (!showFallbackText) return null
    return (
      <TypewriterText
        text={name}
        tag="span"
        className="text-[#9cdcfe]"
      />
    )
  }

  return (
    <img
      src={currentUrl}
      alt={name}
      width={size}
      height={size}
      onError={handleError}
      className={`object-contain shrink-0 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  )
}
