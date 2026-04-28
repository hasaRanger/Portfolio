'use client'

import { createContext, useContext, useState } from 'react'

// Maps explorer label → tab index (and vice versa)
export const FILE_LABELS = ['About.md', 'Work.done', 'Tech.stack', 'Contact.me'] as const
export type FileLabel = typeof FILE_LABELS[number]

interface ActiveFileCtx {
    activeFile: FileLabel
    activeTab: number
    setByFile: (label: FileLabel) => void
    setByTab: (index: number) => void
}

const ActiveFileContext = createContext<ActiveFileCtx | null>(null)

export function ActiveFileProvider({ children }: { children: React.ReactNode }) {
    const [activeFile, setActiveFile] = useState<FileLabel>('About.md')
    const [activeTab, setActiveTab] = useState(0)

    const setByFile = (label: FileLabel) => {
        setActiveFile(label)
        setActiveTab(FILE_LABELS.indexOf(label))
    }

    const setByTab = (index: number) => {
        setActiveTab(index)
        setActiveFile(FILE_LABELS[index])
    }

    return (
        <ActiveFileContext.Provider value={{ activeFile, activeTab, setByFile, setByTab }}>
            {children}
        </ActiveFileContext.Provider>
    )
}

export function useActiveFile() {
    const ctx = useContext(ActiveFileContext)
    if (!ctx) throw new Error('useActiveFile must be used inside ActiveFileProvider')
    return ctx
}