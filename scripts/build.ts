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

  const _entryPoints = await globToFiles('src/**/!(*.spec|*.test|*.d).ts')

  // @TODO 此处采用了暴力手段排除templates中的所有ts文件
  const filter = (_files: string[]) => {
    let files: string[] = [];
    _files.map(file => {
      if (file.search(/templates/) == -1) { files.push(file) }
    })
    return files
  }
  const entryPoints = filter(_entryPoints)

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
