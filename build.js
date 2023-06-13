import builder from 'core-js-builder'
import path from 'node:path'
import url from 'node:url'
import fs from 'node:fs/promises'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const output = path.join(__dirname, './dist/core-js.js')

await builder({
  modules: [
    'es.object.to-string',
    'es.promise',
    'es.array.index-of',
    'es.array.push',
    'es.array.sort',
    'es.regexp.exec',
    'es.regexp.test',
    'es.string.replace',
    'es.array.slice',
    'web.dom-collections.for-each',
    'es.array.filter',
    'es.regexp.to-string',
    'es.array.from',
    'es.string.iterator',
    'es.symbol',
    'es.symbol.description',
    'es.symbol.iterator',
    'es.array.iterator',
    'web.dom-collections.iterator',
    'es.error.cause'
  ],
  format: 'bundle',
  filename: output
})

const files = await fs.readdir(path.join(__dirname, './src'))
for (const file of files) {
  await fs.copyFile(
    path.join(__dirname, './src', file),
    path.join(__dirname, './dist', file)
  )
}
