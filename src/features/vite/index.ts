import type { FeatureSetup, IsSkipFeature } from '../../types'
import { resolve } from 'path'
import camelCase from 'lodash.camelcase'
import { BUILD_TOOLS } from '../typescript/build-tools'
import { addDevDeps } from '../../core/dependency'
import { rederTemplate } from '../../core/template'
import { fileExists } from '../../utils/path_helper'

export const isSkip: IsSkipFeature = async ({ rootPath, answers }) => {
  return (
    answers.buildTool !== BUILD_TOOLS.VITE ||
    (await fileExists(resolve(rootPath, 'vite.config.ts')))
  )
}

export const setup: FeatureSetup = async context => {
  const {
    rootPath,
    answers: { packageName }
  } = context

  addDevDeps([
    'vite',
    '@vitejs/plugin-react'
  ])

  await rederTemplate(
    resolve(rootPath, 'vite.config.ts'),
    resolve(__dirname, './templates/vite.config.ts.tpl')
  )
}
