import { readFileSync } from 'fs'
const t = readFileSync('src/data/questions.ts', 'utf8')
const re = /"id": "(q\d+)",[\s\S]*?"categoryId": "([^"]+)",[\s\S]*?"question": "((?:\\.|[^"\\])*)"/g
let m
const q = []
while ((m = re.exec(t))) {
  q.push({
    id: m[1],
    categoryId: m[2],
    question: m[3].replace(/\\'/g, "'").replace(/\\"/g, '"'),
    bilingual: t.slice(m.index, m.index + 800).includes('"bilingualRequired": true'),
  })
}
console.log(JSON.stringify(q, null, 2))
