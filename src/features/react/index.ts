import type { FeatureSetup, IsSkipFeature, QuestionBuilder } from '../../types'
import { resolve } from 'path'
import { buildConfirmQuestion } from '../../core/question'
import { BUILD_TOOLS } from '../typescript/build-tools'
import { rederTemplate, copyTemplate } from '../../core/template'
import { addDeps, addDevDeps } from '../../core/dependency'

export const questionBuilder: QuestionBuilder = async () => {
  return buildConfirmQuestion(
    'isReactNeeded',
    '❓ Do you need to use React?',
    false,
    answer => answer.buildTool !== BUILD_TOOLS.TSC
  )
}

export const isSkip: IsSkipFeature = async context => {
  return !context.answers.isReactNeeded
}

export const setup: FeatureSetup = async context => {
  const { rootPath, answers } = context
  
  addDeps(['react', 'react-dom'])
  addDevDeps(['@types/react', '@types/react-dom'])

  await copyTemplate(
    resolve(__dirname, './templates'),
    resolve(rootPath)
  )
}