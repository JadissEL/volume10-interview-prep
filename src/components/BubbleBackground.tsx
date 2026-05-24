import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const blobs = [
  { size: 420, x: '8%', y: '12%', delay: 0 },
  { size: 320, x: '72%', y: '8%', delay: 0.4 },
  { size: 380, x: '55%', y: '58%', delay: 0.8 },
  { size: 260, x: '15%', y: '68%', delay: 1.1 },
]

export function BubbleBackground() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 40, damping: 20 })
  const sy = useSpring(my, { stiffness: 40, damping: 20 })
  const parallaxX = useTransform(sx, [-1, 1], [-18, 18])
  const parallaxY = useTransform(sy, [-1, 1], [-12, 12])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      mx.set(nx)
      my.set(ny)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-v10-bubble blur-3xl"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            x: parallaxX,
            y: parallaxY,
          }}
          animate={{
            scale: [1, 1.08, 0.96, 1],
            rotate: [0, 6, -4, 0],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: b.delay,
          }}
        />
      ))}
    </div>
  )
}
