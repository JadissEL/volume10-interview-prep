/**
 * Wrapper ESM — délègue à scripts/audit-story-cards.ts via tsx
 * Usage: node scripts/audit-story-cards.mjs [--strict]
 */
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)
const r = spawnSync(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['tsx', join(__dirname, 'audit-story-cards.ts'), ...args],
  { stdio: 'inherit', shell: process.platform === 'win32' },
)
process.exit(r.status ?? 1)
