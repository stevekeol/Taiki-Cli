import type { FeatureSetup, IsSkipFeature, QuestionBuilder } from '../../types'
import { resolve } from 'path'
import { buildConfirmQuestion } from '../../core/question'
import { BUILD_TOOLS } from '../typescript/build-tools'
import { rederTemplate, copyTemplate } from '../../core/template'
import { addDeps, addDevDeps } from '../../core/dependency'

export const questionBuilder: QuestionBuilder = async () => {
  return buildConfirmQuestion(
    'isElectronNeeded',
    '❓ Do you need to build desktop app with Electron?',
    false,
    answer => answer.isReactNeeded === true
  )
}

export const isSkip: IsSkipFeature = async context => {
  return !context.answers.isElectronNeeded
}

export const setup: FeatureSetup = async context => {
  const { rootPath, answers } = context
  
  addDeps(['electron-is-dev'])
  addDevDeps(['electron', 'electron-builder'])

  await copyTemplate(
    resolve(__dirname, './templates'),
    resolve(rootPath)
  )
}