export default function GreenDot() {
  return (
    <span className="relative inline-flex items-center justify-center w-3 h-3">
      {/* Outer ring 1 */}
      <span className="gps-ping absolute inline-flex w-2.5 h-2.5 rounded-full bg-green-400 opacity-50" />
      {/* Outer ring 2 — delayed */}
      <span className="gps-ping-delay absolute inline-flex w-2 h-2 rounded-full bg-green-400 opacity-25" />
      {/* Inner solid dot */}
      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-500" />
    </span>
  )
}