/**
 * Fond aligné volume10.com : gris chaud (#e6e4e4), sobre, sans effets « éditoriaux » tiers.
 */
export function Volume10Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div className="absolute inset-0 bg-v10-bg" />
      {/* Légère touche beige en coin — rappel is-beige du menu mobile */}
      <div
        className="absolute -right-[20%] top-0 h-[50vh] w-[60%] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 100% 0%, #e3c9ab 0%, transparent 65%)',
        }}
      />
    </div>
  )
}
