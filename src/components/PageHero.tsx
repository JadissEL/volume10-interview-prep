import { motion } from 'framer-motion'

type Props = {
  label: string
  title: string
  description?: string
  accent?: boolean
}

export function PageHero({ label, title, description, accent }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 md:mb-10"
    >
      <p className={accent ? 'label-caps' : 'label-caps-neutral'}>{label}</p>
      <h2 className="headline-lg mt-3 max-w-3xl">{title}</h2>
      {accent && <div className="rule-accent" />}
      {description && (
        <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-v10-dim md:text-base">
          {description}
        </p>
      )}
    </motion.header>
  )
}
