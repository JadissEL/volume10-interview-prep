import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { fr } from '../i18n/fr'

type Props = {
  onSearch: () => void
}

export function SiteHeader({ onSearch }: Props) {
  return (
    <header className="border-b border-v10-line bg-v10-bg">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <a href="/" className="logo-v10 inline-block text-v10-ink" onClick={(e) => e.preventDefault()}>
              VOLUME10
            </a>
            <p className="label-caps-neutral mt-6">{fr.app.prepLabel}</p>
            <h1 className="headline-xl mt-3">
              Donner de l&apos;espace
              <br />
              aux idées
            </h1>
            <p className="mt-4 text-base font-normal text-v10-dim md:text-lg">
              {fr.app.tagline}
            </p>
          </motion.div>

          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onSearch}
            className="link-underline-up flex items-center gap-2 self-start text-sm font-medium text-v10-ink"
          >
            <Search className="h-4 w-4" aria-hidden />
            <span>{fr.search.button}</span>
            <kbd className="hidden rounded border border-v10-line bg-v10-paper px-1.5 py-0.5 text-[0.65rem] font-normal text-v10-muted sm:inline">
              ⌘K
            </kbd>
          </motion.button>
        </div>
      </div>
    </header>
  )
}
