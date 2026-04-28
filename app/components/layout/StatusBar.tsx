import { GitBranch, X, Check } from 'lucide-react'
import { SITE_VERSION } from '../../config/site'

export default function StatusBar() {
    return (
        <footer className="w-full h-6 bg-[#007acc] flex items-center justify-between select-none">

            {/* Left */}
            <div className="flex items-center h-full">
                <div className="flex items-center gap-1.5 px-3 h-full text-white text-[11px] hover:bg-[#1f8ad2] 
        cursor-pointer transition-colors">
                    <GitBranch size={12} strokeWidth={2} />
                    <span>main</span>
                </div>
            </div>

            {/* Middle */}
            <div className="flex-1">
                <span className="h-full flex items-center justify-center text-white text-[11px] hover:bg-[#1f8ad2] cursor-pointer transition-colors whitespace-nowrap">
                    © 2026 Nadeesha Hasaranga. All Rights Reserved.
                </span>
            </div>

            {/* Right */}
            <div className="flex items-center h-full pr-3">
                <span className="h-full flex items-center justify-center text-white text-[11px] hover:bg-[#1f8ad2] cursor-pointer transition-colors whitespace-nowrap">
                    v{SITE_VERSION} • Built with Next.js
                </span>
            </div>
        </footer>
    )
}