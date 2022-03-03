import path from 'path'
import fs from 'fs-extra'
import glob from 'glob'
import { build as esbuild } from 'esbuild'
import { copyDist } from './copy_files'

function globToFiles(globStr: string) {
  return new Promise<string[]>((resolve, reject) => {
    glob(globStr, {}, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}

async function build() {
  const distPath = path.resolve(__dirname, '..', 'dist')
  await fs.remove(distPath)

  const entryPoints = await globToFiles('src/**/!(*.spec|*.test|*.d).ts')
  // const entryPoints = await globToFiles('src/**/!(*.spec|*.test|*.d|(features/**/templates/*)).ts')
  console.log('---', entryPoints)
  await esbuild({
    entryPoints,
    platform: 'node', // @TODO
    minify: true,
    sourcemap: true,
    format: 'cjs', // @TODO
    tsconfig: 'tsconfig.json',
    outdir: 'dist/src'
  })
}

build()
  .then(copyDist)
  .catch((e: Error) => {
    console.error(e)
    process.exit(1)
  })
