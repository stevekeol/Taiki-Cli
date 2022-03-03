import { resolve } from 'path'
import { pathExists, readdir, copy } from 'fs-extra'

export async function copyDist() {
  const distPath = resolve(__dirname, '..', 'dist')
  const distFolderExists = await pathExists(distPath)

  if (!distFolderExists) {
    throw new Error('Can not found dist folder')
  }

  const featurePath = resolve(__dirname, '..', 'src', 'features')
  const featureList = await readdir(featurePath)

  for (const feature of featureList) {
    const templatePath = resolve(featurePath, feature, 'templates')
    if (await pathExists(templatePath)) {
      const distTemplatePath = resolve(distPath, 'src', 'features', feature, 'templates')
      await copy(templatePath, distTemplatePath, { overwrite: true })
    }
  }

  for (const file of ['package.json', 'README.md']) {
    await copy(resolve(__dirname, '..', file), resolve(distPath, file), { overwrite: true })
  }

  console.log('😌 All files has been copied to dist folder')
}
