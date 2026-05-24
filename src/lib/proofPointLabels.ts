import { getProofPoint } from '../data/candidateProfile'

export function resolveProofPointLabels(ids: string[]): string[] {
  return ids.map((id) => getProofPoint(id)?.label ?? id)
}
