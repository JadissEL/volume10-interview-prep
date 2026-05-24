import { useEffect } from 'react'

type Handlers = {
  onNext?: () => void
  onPrev?: () => void
  onReveal?: () => void
  onTab?: (index: number) => void
  onSearch?: () => void
  onExportTab?: () => void
  onApplicationTab?: () => void
  onOpeningTab?: () => void
}

export function useKeyboardShortcuts(handlers: Handlers, enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        handlers.onSearch?.()
        return
      }

      if (e.key === 'e' || e.key === 'E') {
        handlers.onExportTab?.()
        return
      }

      if (e.key === 'a' || e.key === 'A') {
        handlers.onApplicationTab?.()
        return
      }

      if (e.key === 'o' || e.key === 'O') {
        handlers.onOpeningTab?.()
        return
      }

      if (e.key === 'ArrowRight' || e.key === 'j') {
        e.preventDefault()
        handlers.onNext?.()
      } else if (e.key === 'ArrowLeft' || e.key === 'k') {
        e.preventDefault()
        handlers.onPrev?.()
      } else if (e.key === ' ' || e.key === 'r') {
        e.preventDefault()
        handlers.onReveal?.()
      } else if (e.key >= '1' && e.key <= '9') {
        const idx = Number(e.key) - 1
        handlers.onTab?.(idx)
      } else if (e.key === '0') {
        handlers.onTab?.(9)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handlers, enabled])
}
