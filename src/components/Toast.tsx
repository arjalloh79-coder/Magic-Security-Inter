import { useEffect, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'

interface ToastProps {
  message: string
  show: boolean
  onClose: () => void
  closeLabel: string
  durationMs?: number
}

export function Toast({ message, show, onClose, closeLabel, durationMs = 5000 }: ToastProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!show) return
    setVisible(true)
    const timer = setTimeout(() => setVisible(false), durationMs)
    return () => clearTimeout(timer)
  }, [show, durationMs])

  useEffect(() => {
    if (visible || !show) return
    const timer = setTimeout(onClose, 300)
    return () => clearTimeout(timer)
  }, [visible, show, onClose])

  if (!show) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-x-4 bottom-24 z-[60] mx-auto flex max-w-md items-start gap-3 rounded-sm border border-accent-500/40 bg-ink-900/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-md transition-all duration-300 sm:bottom-28 sm:left-auto sm:right-8 sm:mx-0 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      }`}
    >
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" strokeWidth={1.75} />
      <p className="flex-1 text-sm leading-relaxed text-white">{message}</p>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label={closeLabel}
        className="shrink-0 text-white/40 transition-colors hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
